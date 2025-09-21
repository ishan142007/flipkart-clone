const express=require('express');
const {create,fetchdata} =require('../Controller/order.controller')

const routes=express.Router();

routes.post('/order/create',create);

routes.get('/order/fetch',fetchdata);

//this is the route created by dev we can have anything in the post braces
module.exports=routes