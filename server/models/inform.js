  // models/donate.js  (or add right below your userSchema in the same file)

  const mongoose = require("mongoose");
  const informSchema = new mongoose.Schema(
    {
        photo:                 { type: String, default: "" },
        location:              { type: String, required: true },
        additionalInformation: { type: String, default: "" },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: "inform" }   // optional, forces collection name
  );

  const Inform = mongoose.model("Inform", informSchema);

  module.exports = { Inform };   // export both models if in the same file
