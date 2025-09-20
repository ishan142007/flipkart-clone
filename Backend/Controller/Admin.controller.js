const {respone}=require("express");
const Admin=require("../Model/Admin.model");
const create=async(req,res)=>{
    
    try{

        const response=await Admin.create(req.body);
        
    res.status(200).json({message:"successfull",data:response})
    }
    catch(error){
        res.status(500).json({message:"unsuccessfull",data:error})
    }


}
const fetchdata=async(req,res)=>{
    try{

        const response=await Admin.findAll();
        res.status(200).json({message:"success",data:response})
    }
    catch(error){
        res.status(500).json({message:"error",error:error})
    }
    
}
module.exports={create,fetchdata}