const { response } = require('express');
const Student=require('../Model/Student.model');
const create=async(req,res)=>{
   
   
   const response=await Student.create(req.body)
   .then(()=> response.status.send(200).json("successfull",response))
   .catch(()=> response.status.send(500).json("error",error))

}
module.exports=create