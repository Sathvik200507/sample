const mongoose = require("mongoose");

const donationItemSchema = new mongoose.Schema({
  item: String,
  description: String,
  time: String,
  ptsEarned: Number
});

const donationTypeSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const monthlyActivitySchema = new mongoose.Schema({
  month: { type: String, required: true },
  donations: { type: Number, required: true },
  points: { type: Number, required: true }
});

const badgesSchema = new mongoose.Schema({
  title:{type:String},
  desc:{type:String},
  earned:{type:Boolean}
});


const userSchema = new mongoose.Schema({
  userName:{ type: String, required: true },
  fullName: { type: String, required: true },
  photo:{type:String},
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, enum: ["household", "restaurant", "organisation"], required: true },
  points: { type: Number, default: 0 },
  totalDonations: { type: Number, default: 0 },
  impactLevel:{type:String},
  recentDonations: [donationItemSchema],
  donationPercentages: [donationTypeSchema],
  memberSince: { type: Date, default: Date.now },
  monthlyActivity: [monthlyActivitySchema],
  badges:[badgesSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
