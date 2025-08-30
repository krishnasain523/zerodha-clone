const { model, default: mongoose } = require("mongoose");
const positionschema=require("../schema/positionschema")
module.exports= mongoose.model("position",positionschema);
