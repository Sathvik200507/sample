// seed.js
//import any model, change the sample data and export to cloud DB "node server.js"
require('dotenv').config(); // Load .env
const mongoose = require('mongoose');
const { User } = require('./models/user');

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

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to cloud MongoDB");

    // await DonationPercentages.deleteMany(); // Optional: clear existing
    await User.insertMany(sampleUsers);

    console.log("Sample data inserted into cloud DB.");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from DB.");
  }
}

seedData();
