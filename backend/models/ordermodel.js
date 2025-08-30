const { model, default: mongoose } = require("mongoose");
const orderschema = require("../schema/orderschema");

module.exports=mongoose.model("order",orderschema);
