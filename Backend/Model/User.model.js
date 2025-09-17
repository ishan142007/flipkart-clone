const sequelize=require('../Config/db.config');
const {DataTypes} = require('sequelize');
const user = sequelize.define("User",
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncriment:true,
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
.then(()=>console.log("table created"))
.catch(()=>console.log("error"))
module.exports=user

