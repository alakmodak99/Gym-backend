const mongoose = require("mongoose");

module.exports = ()=> mongoose.connect("mongodb+srv://project99:project99@cluster0.rn1ljwq.mongodb.net/boult-db?retryWrites=true&w=majority");