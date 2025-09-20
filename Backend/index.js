const cors = require("cors");
const student=require("./Model/Student.model")
const Admin=require("./Model/Admin.model")
const user= require("./Model/User.model");
const express=require('express');
const sequelize= require('./Config/db.config');
const mysql = require('mysql');
const studentrouter=require('./Routes/Students.routes');
const userRouter=require("./Routes/user.routes");
const adminRouter=require("./Routes/Admin.routes")

const app= express();

app.use(express.json())

app.use(cors());
// app.use("/api",userRouter)
app.use('/api',userRouter)
app.use('/api',adminRouter)
app.use('/api',studentrouter)

sequelize.sync({force:false})
.then(()=>console.log('database sync successfull'))
.catch(()=>console.log('error'))

app.listen(8000,()=>{
    console.log('server running a port number 8000');

})