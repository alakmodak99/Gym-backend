const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type:String},
    email:{type:String, required:true},
    password : {type:String, required: true}

},{
    versionKey:false,
    timestamps:true
})
const model = new mongoose.model("User", userSchema)
module.exports = model

