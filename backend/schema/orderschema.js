const { Schema, default: mongoose } = require("mongoose");

const orderschema=new Schema(
    {
        name: String,
    qty: Number,
    price: Number,
    mode:String,
    cretedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    }
)
module.exports=orderschema;