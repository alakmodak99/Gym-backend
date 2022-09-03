const { urlencoded } = require("express")
const express = require("express")
const cors = require("cors")
const connect = require("./Config/db")
const controller = require("./Controllers/user.controller")
const app = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))
// app.use("/", async (req,res)=>{
//     return res.send("Connected")
// })
app.use("/", controller)
const port = process.env.PORT || 8089
app.listen(port, async ()=>{
    await connect()
    console.log("listening to the port", port)
})
