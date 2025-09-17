const express=require('express');
const create =require('../Controller/student.controller')
const routes=express.Router();
routes.post('/student/create',create);//this is the route created by dev we can have anything in the post braces
module.exports=routes