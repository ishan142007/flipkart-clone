
const { response } = require('express');
const User=require('../Model/User.model');
const jwt =require('jsonwebtoken')
require('dotenv').config();

const generateToken=(response)=>{
    return jwt.sign({id:response.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}



const create=async(req,res)=>{
    

    try{    
        // console.log("wertyuio") 
    const response=await User.create(req.body)
    const token=generateToken(response );
     res.status(200).json({message:"successfull",data: response,token})}
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
const deletebyid = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });

        if (deleted) {
            return res.json({ message: "delete ho gya" });
        } else {
            return res.json({ message: "delete nahi hua" });
        }
    } catch (error) {
        res.status(500).json({ error: "error", details: error.message });
    }
};

const updatebyid = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const [updated] = await User.update(
            { name, age },
            { where: { id } }
        );

        if (updated) {
            return res.status(200).json({ message: "successful update ho gya" });
        } else {
            return res.json({ message: "error update nahi hua" });
        }
    } catch (error) {
        res.status(500).json({ error: "error", details: error.message });
    }
};

module.exports={create,fetchdata,deletebyid,updatebyid}