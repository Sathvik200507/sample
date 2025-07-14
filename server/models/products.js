const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    category:String,
    image:String,
    title:String,
    desc:String,
    rating:Number,
    reviews:Number,
    price:Number,
    offerPrice:Number,
    points:Number,
    finalPrice:Number
});

const Product=mongoose.model("Product",productSchema);
module.exports=Product;