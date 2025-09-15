const mongoose=require("mongoose");
const userschema= require( "../schema/userschema");
module.exports=mongoose.model("user",userschema);

