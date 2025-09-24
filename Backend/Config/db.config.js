const {Sequelize} = require('sequelize');
require('dotenv').config();
const db =new Sequelize(process.env.dbname,process.env.dbusername,process.env.dbpassword,{
    host:process.env,
    dialect:"mysql",
});
module.exports= db