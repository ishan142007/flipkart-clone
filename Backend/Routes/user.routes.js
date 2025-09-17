const express =require('express')
const {create,fetchdata}=require("../Controller/User.controller")
const routes=express.Router();
routes.post("/user/create",create);
routes.post("/fetchdata",fetchdata);
module.exports=routes