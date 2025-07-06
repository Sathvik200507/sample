  // models/donate.js  (or add right below your userSchema in the same file)

  const mongoose = require("mongoose");

  const donateSchema = new mongoose.Schema(
    {
      name:  { type: String, required: false },
      phone: { type: String, required: false },
      email: { type: String, required: false },
      quantity:  { type: String, required: true },                // “10 meal boxes”
      freshness: {
        type: String,
        enum: ["Very Fresh", "Fresh", "Good", "Fair"],
        required: true
      },

      type: {
        type: String,
        enum: ["Veg", "NonVeg", "DiaryProducts", "Prepared Meals"],
        required: true
      },

      location:              { type: String, required: true },
      additionalInformation: { type: String, default: "" },
      photo:                 { type: String, default: "" },

      createdAt: { type: Date, default: Date.now }
    },
    { collection: "donate" }   // optional, forces collection name
  );

  const Donate = mongoose.model("Donate", donateSchema);


  module.exports = { Donate };   // export both models if in the same file
