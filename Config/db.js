const mongoose = require("mongoose")
//console.log(process.env.DB_URL)
const connect =  ()=> mongoose.connect("mongodb+srv://gym-app-b:gym-app-b@cluster0.cpp908y.mongodb.net/?retryWrites=true&w=majority")

module.exports= connect