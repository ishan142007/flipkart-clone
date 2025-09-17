const cors = require("cors");
const user= require("./Model/User.model");
const student=require("./Model/Student.model")
const express=require('express');
const sequelize= require('./Config/db.config');
const mysql = require('mysql');
const studentrouter=require('./Routes/Students.routes');
const app= express();
app.use('/api',studentrouter)

app.use(cors());

sequelize.sync({force:false})
.then(()=>console.log('database sync successfull'))
.catch(()=>console.log('error'))

app.listen(8000,()=>{
    console.log('server running a port number 8000');

})