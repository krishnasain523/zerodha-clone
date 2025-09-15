const { Schema } = require('mongoose')

const userschema = new Schema({
  username: { type: String, required: true },
  password: {
    type: String,
    requird: true,
    minlength:8,
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
})
module.exports = userschema
