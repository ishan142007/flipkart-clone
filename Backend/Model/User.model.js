const sequelize=require('../Config/db.config');
const {DataTypes} = require('sequelize');
const user = sequelize.define("User",
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:true
            
        }


    }
)
user.sync({force:false})
try{
    console.log("table created")}

catch(error){console.log("error")}
module.exports=user

