const { Schema } = require("mongoose");
const mongoose=require("mongoose");
const holdingschema = new Schema(
    {
        name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net:String,
    day: String,
    }
)
module.exports= mongoose.model("Holding",holdingschema);
