const express=require('express');
const {create,fetchdata}=require("../Controller/Admin.controller");
const routes=express.Router();
routes.post("/admin/create",create);
routes.get("/admin/fetchdata",fetchdata);
module.exports=routes