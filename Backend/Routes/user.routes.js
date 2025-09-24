const express =require('express')
const auth=require('../Middleware/auth')
const {create,fetchdata, deletebyid,updatebyid}=require("../Controller/User.controller")
const routes=express.Router();
routes.post("/user/create",create);
routes.get("/user/fetchdata",auth,fetchdata);
routes.delete("/user/delete/:id",deletebyid)
routes.put("/user/update/:id",updatebyid)
module.exports=routes