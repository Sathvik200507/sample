// seed.js
//import any model, change the sample data and export to cloud DB "node server.js"
require('dotenv').config(); // Load .env
const mongoose = require('mongoose');
const { User } = require('./models/user');
const { Donate} = require('./models/donate');
const {Inform} = require('./models/inform');
const sampleUsers = [
  {
    fullName: "Alice Johnson",
    gender: "Female",
    email: "alice@example.com",
    contactNumber: "9876543210",
    password: "$2b$10$abcde12345abcde12345ab.AAAAAABBBBBBCCCCCDDDDD",
    address: "123 Main Street, City A",
    type: "household",
    points: 120,
    totalDonations: 18,
    recentDonations: [
      { item: "Milk Packets", description: "2L full cream", time: "2 days ago" },
      { item: "Vegetables", description: "Carrots and tomatoes", time: "5 days ago" }
    ],
    donationPercentages: [
      { name: "Fresh Produce", value: 40 },
      { name: "Prepared Meals", value: 30 },
      { name: "Dairy Products", value: 20 },
      { name: "Foods", value: 10 }
    ],
    memberSince: new Date("2023-01-10")
  },
  {
    fullName: "Bob Smith",
    gender: "Male",
    email: "bob@example.com",
    contactNumber: "9123456780",
    password: "$2b$10$abcde12345abcde12345ab.FFFFFFGGGGGGHHHHHH",
    address: "45 Cross Road, City B",
    type: "restaurant",
    points: 80,
    totalDonations: 10,
    recentDonations: [
      { item: "Bread Loaves", description: "10 packs", time: "1 day ago" }
    ],
    donationPercentages: [
      { name: "Prepared Meals", value: 50 },
      { name: "Foods", value: 30 },
      { name: "Dairy Products", value: 10 },
      { name: "Fresh Produce", value: 10 }
    ],
    memberSince: new Date("2023-03-15")
  },
  {
    fullName: "Charlie Davis",
    gender: "Male",
    email: "charlie@example.com",
    contactNumber: "9988776655",
    password: "$2b$10$abcde12345abcde12345ab.ZZZZZZYYYYYYXXXXXX",
    address: "89 Hill Street, City C",
    type: "organisation",
    points: 250,
    totalDonations: 40,
    recentDonations: [
      { item: "Packaged Meals", description: "50 boxes", time: "3 hours ago" }
    ],
    donationPercentages: [
      { name: "Prepared Meals", value: 70 },
      { name: "Foods", value: 20 },
      { name: "Fresh Produce", value: 5 },
      { name: "Dairy Products", value: 5 }
    ],
    memberSince: new Date("2024-06-05")
  },
  {
    fullName: "Diana Green",
    gender: "Female",
    email: "diana@example.com",
    contactNumber: "9090909090",
    password: "$2b$10$abcde12345abcde12345ab.QQQQQQRRRRRRSSSSSS",
    address: "23 Lake View, City D",
    type: "household",
    points: 45,
    totalDonations: 5,
    recentDonations: [
      { item: "Fruits", description: "Oranges and Apples", time: "3 days ago" }
    ],
    donationPercentages: [
      { name: "Fresh Produce", value: 90 },
      { name: "Foods", value: 10 },
      { name: "Prepared Meals", value: 0 },
      { name: "Dairy Products", value: 0 }
    ],
    memberSince: new Date("2024-10-20")
  },
  {
    fullName: "Ethan Ray",
    gender: "Male",
    email: "ethan@example.com",
    contactNumber: "9876501234",
    password: "$2b$10$abcde12345abcde12345ab.TTTTTTUUUUUUVVVVVV",
    address: "77 Palm Road, City E",
    type: "organisation",
    points: 300,
    totalDonations: 55,
    recentDonations: [
      { item: "Dairy Boxes", description: "Cheese & Milk", time: "4 days ago" }
    ],
    donationPercentages: [
      { name: "Dairy Products", value: 60 },
      { name: "Prepared Meals", value: 25 },
      { name: "Foods", value: 10 },
      { name: "Fresh Produce", value: 5 }
    ],
    memberSince: new Date("2025-01-15")
  }
];
const sampleDonateUsers = [
  {
     "name": "Teja",
      "phone": "9876543210",
      "email": "teja@example.com",
    "quantity": "10 meal boxes",
    "freshness": "Fresh",
    "type": "Veg",
    "location": "Kukatpally, Hyderabad",
    "additionalInformation": "Packed today, can be picked up before 5 PM",
    "photo": "https://i.imgur.com/example-food.jpg",
    "createdAt": "2025-07-05T12:45:00.000Z" 
  },
  {
    "name": "Hotel Annapurna",
    "phone": "9988776655",
    "email": "info@annapurna.com",
    "quantity": "20 biryani packets",
    "freshness": "Very Fresh",
    "type": "NonVeg",
    "location": "Ameerpet, Hyderabad",
    "additionalInformation": "Sealed packs, prepared 1 hour ago",
    "photo": "https://i.imgur.com/biryani-box.jpg",
    "createdAt":  "2025-07-05T13:00:00.000Z" 
  },
  {
    "name": "Om Dairy",
    "phone": "9123456789",
    "email": "contact@omdairy.in"
    ,
    "quantity": "30 milk packets (500ml)",
    "freshness": "Good",
    "type": "DiaryProducts",
    "location": "SR Nagar, Hyderabad",
    "additionalInformation": "Expires tomorrow, refrigerated",
    "photo": "",
    "createdAt":  "2025-07-05T13:15:00.000Z" 
  },
];

const sampleInformUsers = [
  {
    "_id": { "$oid": "664fa6c9f8eaa0c29cfa0001" },
    "name": "Aarav Sharma",
    "phone": "9876543210",
    "email": "aarav.sharma@example.com",
    "location": {
      "latitude": 17.4435,
      "longitude": 78.3772,
      "address": "Road No 10, Banjara Hills, Hyderabad, Telangana, India"
    },
    "description": "Open man-hole left uncovered on the main road.",
    "photo": "https://my-bucket.s3.ap-south-1.amazonaws.com/informs/664fa6c9f8eaa0c29cfa0001.jpg",
    "createdAt": { "$date": "2025-07-05T16:52:30.000Z" }
  },
  {
    "_id": { "$oid": "664fa6c9f8eaa0c29cfa0002" },
    "name": "Priya Verma",
    "phone": "9123456789",
    "email": "priya.v@example.com",
    "location": {
      "latitude": 28.5672,
      "longitude": 77.2100,
      "address": "Sector 12, Dwarka, New Delhi, India"
    },
    "description": "Stray wires hanging from electric pole near the market.",
    "photo": "https://my-bucket.s3.ap-south-1.amazonaws.com/informs/664fa6c9f8eaa0c29cfa0002.jpg",
    "createdAt": { "$date": "2025-07-05T17:03:10.000Z" }
  },
  {
    "_id": { "$oid": "664fa6c9f8eaa0c29cfa0003" },
    "name": "Mohammed Irfan",
    "phone": "9740012345",
    "email": "irfan.m@example.com",
    "location": {
      "latitude": 12.9608,
      "longitude": 77.6419,
      "address": "2nd Cross, Indiranagar, Bengaluru, Karnataka, India"
    },
    "description": null,
    "photo": "https://my-bucket.s3.ap-south-1.amazonaws.com/informs/664fa6c9f8eaa0c29cfa0003.jpg",
    "createdAt": { "$date": "2025-07-05T17:15:42.000Z" }
  },
  {
    "_id": { "$oid": "664fa6c9f8eaa0c29cfa0004" },
    "name": "Sneha Kulkarni",
    "phone": "9654321870",
    "email": "sneha.k@example.com",
    "location": {
      "latitude": 19.0760,
      "longitude": 72.8777,
      "address": "Near CST Station, Fort, Mumbai, Maharashtra, India"
    },
    "description": "Broken streetlight—road remains dark after 8 PM.",
    "photo": "https://my-bucket.s3.ap-south-1.amazonaws.com/informs/664fa6c9f8eaa0c29cfa0004.jpg",
    "createdAt": { "$date": "2025-07-05T17:28:05.000Z" }
  }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to cloud MongoDB");

    // await DonationPercentages.deleteMany(); // Optional: clear existing
    // await User.insertMany(sampleUsers);

    // console.log("Sample data inserted into cloud DB.");
    // const docs = await Donate.insertMany(sampleDonateUsers);
    // console.log(`Seed complete: inserted ${docs.length} documents`);
    
    const docs = await Inform.insertMany(sampleDonateUsers);
     console.log(`Seed complete: inserted ${docs.length} documents`);

  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from DB.");
  }
}

seedData();
