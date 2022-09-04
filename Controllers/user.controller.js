const express = require("express")
const route = express.Router()
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require("../Model/User.model")

route.get("/", async (req,res)=>{
    console.log("Alak")
   return res.status(200).send(await userModel.find())
})

route.post("/register", async (req,res)=>{
    const check = await userModel.findOne({email: req.body.email})
    if(check) return res.status(400).send("Someone is already registerd with this email")
  let Salt = await bcryptjs.genSalt(10)
  req.body.password = await bcryptjs.hash(req.body.password, Salt)
  console.log(req.body)
  return res.status(200).send({data: await userModel.create(req.body)})
})

// route.post("/verify-user",async(req,res)=>{
//     try{
//       var decoded = jwt.verify(req.params.id, 'alakmodak');
//       return res.status(200).send(decoded.email)
//     }catch(err){
//       return res.status(400).send(err);
//     }
//   })

route.post("/login", async (req,res)=>{
    const body = req.body
    const check = await userModel.findOne({email: body.email})
    if(check){
        console.log(req.body.password, check.password)
        const checkPass = await bcryptjs.compare(body.password, check.password)
        console.log(checkPass)
        if(checkPass){
            const token = jwt.sign({ email: check.email }, 'alakmodak');
            return res.status(200).json({"message":"Login SuccessFull",token,user:check})
        }else{
            return res.status(400).json({"message":"Invalid Password"})
        }
    }else{
        return res.status(400).json({"message":"No user exists with that email"})
    }
})

module.exports = route
