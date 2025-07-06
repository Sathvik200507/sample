// seed.js
//import any model, change the sample data and export to cloud DB "node server.js"
require('dotenv').config(); // Load .env
const mongoose = require('mongoose');
const { User } = require('./models/user');

const sampleUsers = [
  {
    userName:"alicejohn",
    fullName: "Alice Johnson",
    gender: "Female",
    email: "alice@example.com",
    contactNumber: "9876543210",
    password: "alice123",
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
    monthlyActivity: [
      { month: "Jan", donations: 1, points: 150 },
      { month: "Feb", donations: 2, points: 230 },
      { month: "Mar", donations: 1, points: 280 },
      { month: "Apr", donations: 3, points: 260 },
      { month: "May", donations: 2, points: 240 },
      { month: "Jun", donations: 13, points: 650 }
    ],
    memberSince: new Date("2023-01-10"),
    badges:[
      { title: "First Donation", desc: "Made your first food donation", earned: true,},
      {title: "Community Helper",desc: "Completed 10 donations",earned: true,},
      {title: "Food Hero",desc: "Completed 25 donations",earned: true,},
      {title: "Waste Warrior",desc: "Prevented 100lbs of food waste",earned: false,},
      {title: "Monthly Champion",desc: "Top donor of the month",earned: false,},
    ]
  },
  {
    userName:"bobsmith",
    fullName: "Bob Smith",
    gender: "Male",
    email: "bob@example.com",
    contactNumber: "9123456780",
    password: "bob123",
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
    monthlyActivity: [
      { month: "Jan", donations: 1, points: 150 },
      { month: "Feb", donations: 2, points: 230 },
      { month: "Mar", donations: 1, points: 280 },
      { month: "Apr", donations: 3, points: 260 },
      { month: "May", donations: 2, points: 240 },
      { month: "Jun", donations: 13, points: 650 }
    ],
    memberSince: new Date("2023-03-15"),
    badges:[
      { title: "First Donation", desc: "Made your first food donation", earned: true,},
      {title: "Community Helper",desc: "Completed 10 donations",earned: true,},
      {title: "Food Hero",desc: "Completed 25 donations",earned: true,},
      {title: "Waste Warrior",desc: "Prevented 100lbs of food waste",earned: false,},
      {title: "Monthly Champion",desc: "Top donor of the month",earned: false,},
    ]
  },
  {
    userName:"charlied",
    fullName: "Charlie Davis",
    gender: "Male",
    email: "charlie@example.com",
    contactNumber: "9988776655",
    password: "charlie123",
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
    monthlyActivity: [
      { month: "Jan", donations: 1, points: 150 },
      { month: "Feb", donations: 2, points: 230 },
      { month: "Mar", donations: 1, points: 280 },
      { month: "Apr", donations: 3, points: 260 },
      { month: "May", donations: 2, points: 240 },
      { month: "Jun", donations: 13, points: 650 }
    ],
    memberSince: new Date("2024-06-05"),
    badges:[
      { title: "First Donation", desc: "Made your first food donation", earned: true,},
      {title: "Community Helper",desc: "Completed 10 donations",earned: true,},
      {title: "Food Hero",desc: "Completed 25 donations",earned: true,},
      {title: "Waste Warrior",desc: "Prevented 100lbs of food waste",earned: false,},
      {title: "Monthly Champion",desc: "Top donor of the month",earned: false,},
    ]
  },
  {
    userName:"dianag",
    fullName: "Diana Green",
    gender: "Female",
    email: "diana@example.com",
    contactNumber: "9090909090",
    password: "diana123",
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
    monthlyActivity: [
      { month: "Jan", donations: 1, points: 150 },
      { month: "Feb", donations: 2, points: 230 },
      { month: "Mar", donations: 1, points: 280 },
      { month: "Apr", donations: 3, points: 260 },
      { month: "May", donations: 2, points: 240 },
      { month: "Jun", donations: 13, points: 650 }
    ],
    memberSince: new Date("2024-10-20"),
    badges:[
      { title: "First Donation", desc: "Made your first food donation", earned: true,},
      {title: "Community Helper",desc: "Completed 10 donations",earned: true,},
      {title: "Food Hero",desc: "Completed 25 donations",earned: true,},
      {title: "Waste Warrior",desc: "Prevented 100lbs of food waste",earned: false,},
      {title: "Monthly Champion",desc: "Top donor of the month",earned: false,},
    ]
  },
  {
    userName: "ethanray",
    fullName: "Ethan Ray",
    gender: "Male",
    email: "ethan@example.com",
    contactNumber: "9876501234",
    password: "ethan123",
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
    monthlyActivity: [
      { month: "Jan", donations: 1, points: 150 },
      { month: "Feb", donations: 2, points: 230 },
      { month: "Mar", donations: 1, points: 280 },
      { month: "Apr", donations: 3, points: 260 },
      { month: "May", donations: 2, points: 240 },
      { month: "Jun", donations: 13, points: 650 }
    ],
    memberSince: new Date("2025-01-15"),
    badges:[
      { title: "First Donation", desc: "Made your first food donation", earned: true,},
      {title: "Community Helper",desc: "Completed 10 donations",earned: true,},
      {title: "Food Hero",desc: "Completed 25 donations",earned: true,},
      {title: "Waste Warrior",desc: "Prevented 100lbs of food waste",earned: false,},
      {title: "Monthly Champion",desc: "Top donor of the month",earned: false,},
    ]
  }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to cloud MongoDB");

    await User.deleteMany(); // Optional: clear existing
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
