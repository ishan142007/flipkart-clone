const sequelize=require('../Config/db.config');

const {DataTypes}=require('sequelize')

const Admin= sequelize.define("Admin",
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    }
    
)
Admin.sync({force:true})
try{
    console.log("admin created")
}
catch(error){
    console.log("admin not created")
}
module.exports=Admin
