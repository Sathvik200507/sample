require('dotenv').config();
const express = require('express'); //express is a powerful framework used to build the backend
const cors = require('cors'); //Cross-Origin Resource Sharing used for communication of two different domains working on different ports
const mongoose=require("mongoose"); //MongoDB
const multer = require('multer'); //File Management
const app = express(); //storing express in app and creating our application
const path = require("path");

//session management
const session = require("express-session");
const MongoStore = require("connect-mongo");
//static files
app.use(express.static(path.join(__dirname, '../client/dist'))); // Serve static files from the React app
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.json({ limit: '50mb' })); // for JSON
app.use(express.urlencoded({ limit: '50mb', extended: true }));



// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/uploads/donationphotos"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});

// Setup multer storage for profile photos
const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/profilephotos");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const uploadProfile = multer({ storage: profileStorage });
const upload = multer({ storage });


// 👇 Place this line FIRST — BEFORE express.json and any routes
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️  Webhook error:", err.message);
    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Payment completed:", session.id);
    // TODO: update DB, mark order paid if you store it
  }

  res.status(200).json({ received: true });
});

       

// ✅ CORS must come FIRST
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// ✅ Then session middleware
app.use(
  session({
    secret: "hello12", // use a secure secret in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions"
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);


// app.use(express.json()); //app.use( ) will make use of cors and express.json which takes the json formatted data from the req.body



// local db connection
// main()
//     .then(()=>{
//       console.log("Connection Successful");
//     })
//     .catch((err)=>{
//       console.log(err);
//     })

// async function main(){
//   await mongoose.connect("mongodb://localhost:27017/replato"); //connection string "mongodb://localhost:27017/DB_NAME"
// }
app.use("/api", require("./payment/stripe"));     // prefix all payment routes with /api


//Cloud DB connections
//for this run the command "npm install dotenv"
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB connection error:", err));

//models importing
// use seed.js to export data to cloud
const { User } = require("./models/user");
const { Donate } = require("./models/donate"); 
const { Inform } =require("./models/inform");
const Product =require("./models/products");
const Cart=require("./models/cart");

//Routes
//Landing Page
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html')); // All GET requests that aren't handled by API routes return the React app
});

//Login verification

// app.post("/login",async(req,res)=>{ 
//   const {userName,password}=req.body;
//   const user=await User.findOne({userName:userName,password:password});
//   if(user){
//       req.session.userId = user._id;
//       console.log("success");
//       res.json({"success":true});
//   }
//   else{
//       console.log("failure");
//       res.json({"success":false});
//   }
// });

app.post("/login", async (req, res) => {
  const { userName, password, type } = req.body;
  console.log(type);

  try {
    const user = await User.findOne({ userName, password });

    if (user) {
      const isContributorType = ["organisation", "household", "restaurant"].includes(user.type);
      const isValidType =
        (type === "contributor" && isContributorType) ||
        (type === "community member" && user.type === "community member");

      if (isValidType) {
        req.session.userId = user._id;
        console.log("Login success");
        res.json({ success: true });
      } else {
        console.log("Incorrect role selected");
        res.json({
          success: false,
          message: "Incorrect role selected. Please choose the correct login type."
        });
      }
    } else {
      console.log("Invalid credentials");
      res.json({
        success: false,
        message: "Invalid username or password"
      });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});



//Registration
app.post("/register",async(req,res)=>{
  console.log(req.body);
  const {info}=req.body;
  if(info.password!==info.confirmPassword){
    return res.json({success:false,msg:"pwd"});
  }
  let user=await User.findOne({userName:info.userName});
  if(user){
    return res.json({success:false,msg:"user"});
  }
  const newUser=new User({
    userName: info.userName,
    fullName: info.fullName,
    gender: info.gender,
    email: info.email,
    contactNumber: info.contactNumber,
    password: info.password,
    address: info.address,
    type: info.type,
  });
  await newUser.save();
  return res.json({success:true,msg:"Registration Successfull!"});
});

//Profile page
app.get("/profile", async (req, res) => {
    if (!req.session.userId) {
    return res.status(401).json({ 
      success: false,
      message: "Login to view your profile" 
    });
  }
  try {
    const data = await User.findById(req.session.userId);
    console.log("Photo");
    res.json(data);
  } catch (error) {
    console.error("Error fetching donation data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/upload-profile-photo", uploadProfile.single("photo"), async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Login first" });
  }

  try {
    const photoPath = `/uploads/profilephotos/${req.file.filename}`;
    const updatedUser = await User.findByIdAndUpdate(
      req.session.userId,
      { photo: photoPath },
      { new: true }
    );
    res.json({ success: true, message: "Photo updated!", photo: updatedUser.photo });
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});



// donation
// server.js (excerpt)
// app.post("/donate", async (req, res) => {
//     if (!req.session.userId) {
//     return res.status(401).json({ 
//       success: false,
//       message: "Login to Donate" 
//     });
//   }
//   try {
//     // req.body.info already matches the schema 1-to-1
//     const doc = await Donate.create(req.body.info);
//     res.json({ success: true, msg: "Donation saved!", id: doc._id });
//   } catch (err) {
//     console.error("Donation failed:", err);
//     res.status(400).json({ success: false, msg: err.message });
//   }
// });

app.post("/donate", upload.single("photo"), async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ success: false, message: "Login to Donate" });
  }

  try {
    const { info } = JSON.parse(req.body.data);
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const photoPath = req.file ? `/uploads/donationphotos/${req.file.filename}` : "";

    const donation = await Donate.create({
      ...info,
      name: user.name,
      phone: user.phone,
      email: user.email,
      photo: photoPath,
    });

    res.json({ success: true, msg: "Donation saved!", id: donation._id });
  } catch (err) {
    console.error("Donation failed:", err);
    res.status(400).json({ success: false, msg: err.message });
  }
});



app.post("/inform",async(req,res)=>{
    if (!req.session.userId) {
    return res.status(401).json({ 
      success: false,
      message: "Login to Inform" 
    });
  }
  try{
    const doc = await Inform.create(req.body.info);
     res.json({ success: true, msg: "Inform saved!", id: doc._id });
  } catch (err) {
    console.error("Inform failed:", err);
    res.status(400).json({ success: false, msg: err.message });
  }
});


// /shop route
app.get("/shop", async (req, res) => {
    if (!req.session.userId) {
    return res.status(401).json({ 
      success: false,
      message: "Login to access the shop" 
    });
  }
  let products = await Product.find({});
  res.json(products);
});

// Stripe webhook (before express.json)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  let event;
  try {
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️  Webhook error:", err.message);
    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      await Order.findOneAndUpdate({ ref: session.id }, { paid: true }).exec();
    } catch (err) {
      console.error("Failed to update order:", err);
    }
  }

  res.json({ received: true });
});


//add-to-cart
app.post("/cart",async(req,res)=>{
  let {pid,option}=req.body;
  const newItem=new Cart({pid,option});
  await newItem.save();
  const product=await Product.findOne({_id:pid});
  let title=product.title;
  let price=(option==="nrml")?product.price:product.finalPrice;
  return res.json({success:true,title,price});
});

// Get all reports
app.get("/reports", async (req, res) => {
  try {
    const reports = await Donate.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reports" });
  }
});

// Accept a report
app.post("/reports/:id/accept", async (req, res) => {
  try {
    const report = await Donate.findByIdAndUpdate(req.params.id, { status: "Accepted" }, { new: true });
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: "Failed to accept report" });
  }
});


//logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ success: true }); // ✅ Send just a success message
  });
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));