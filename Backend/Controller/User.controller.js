
const User=require('../Model/User.model');
// const { json } = require('sequelize');
const create=async(req,res)=>{
    // const {name,email,password}=req.body;
    // console.log("reqqqqqqqqqqqqqqqqqqqqqq",req.body)

    try{    
        // console.log("wertyuio") 
    const response=await User.create(req.body)
     res.status(200).json({message:"successfull",data:response})}
   catch(error){ res.status(500).json({message:"error",erroe:error})}


}
const fetchdata=async (req,res)=>{
    try{
    const ans=await User.findAll();
    res.status(200).json({success:"data found",data:ans})}
        catch(error){
            res.status(500).json({error:"error compiled",error});
        }
}
// const del=async(req,res)=>{
//     try{
//         const ans=await.
//     }
// }
module.exports={create,fetchdata}