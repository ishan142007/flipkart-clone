const express=require('express');
const {create,fetchdata} =require('../Controller/student.controller')

const routes=express.Router();

routes.post('/student/create',create);

routes.get('/ft',fetchdata);

//this is the route created by dev we can have anything in the post braces
module.exports=routes