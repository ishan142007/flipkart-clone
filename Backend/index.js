const cors = require("cors");
const express=require('express');
const sequelize= require('./Config/db.config');
const mysql = require('mysql');
const app= express();
app.use(cors());

sequelize.sync({force:false})
.then(()=>console.log('database sync successfull'))
.catch(()=>console.log('error'))

app.listen(5000,()=>{
    console.log('server runnign a port number 5000');

})