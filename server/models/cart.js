const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    pid:{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    option:String
});

module.exports=mongoose.model("Cart",cartSchema);