const mongoose = require("mongoose");

const donationItemSchema = new mongoose.Schema({
  item: String,
  description: String,
  time: String // e.g. "2 days ago"
});

const donationTypeSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, enum: ["household", "restaurant", "organisation"], required: true },
  points: { type: Number, default: 0 },
  totalDonations: { type: Number, default: 0 },
  recentDonations: [donationItemSchema],
  donationPercentages: [donationTypeSchema],
  memberSince: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
