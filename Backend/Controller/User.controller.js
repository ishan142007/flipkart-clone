const {respone} =require('express');
const User=require('../Model/User.model');
// const { json } = require('sequelize');
const create=async(req,res)=>{
    // const {name,email,password}=req.body;


    const response=await Student.create(req.body)
try{()=> response.status.send(200).json("successfull",response)}
   catch(error){()=> response.status.send(500).json("error",error)}


}

const fetchdata=async (req,res)=>{
    try{
    const ans=await User.findAll();
    res.status(200).json({success:"data found",data:ans})}
        catch(error){()=>
            res.status(500).json({error:"error compiled",error});
        }
}
module.exports={create,fetchdata}