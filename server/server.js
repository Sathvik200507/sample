const express = require('express'); //express is a powerful framework used to build the backend
const cors = require('cors'); //Cross-Origin Resource Sharing used for communication of two different domains working on different ports
const mongoose=require("mongoose"); //MongoDB
const app = express(); //storing express in app and creating our application
app.use(cors());         
app.use(express.json()); //app.use( ) will make use of cors and express.json which takes the json formatted data from the req.body

const path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist'))); // Serve static files from the React app

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


//Cloud DB connections
require('dotenv').config(); //for this run the command "npm install dotenv"
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB connection error:", err));

//models importing
// use seed.js to export data to cloud
const { User } = require("./models/user");
// console.log(User.find({name:"Alice Johnson"}));


//Routes
//Landing Page
app.get('/', async (req, res) => {
  console.log("GET /profile hit");
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html')); // All GET requests that aren't handled by API routes return the React app
});

//Profile page
app.get("/profile", async (req, res) => {
  console.log("GET /profile hit");
  try {
    const data = await DonationPercentages.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching donation data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
