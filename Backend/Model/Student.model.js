const sequelize=require('../Config/db.config');
const {DataTypes}=require('sequelize');
const student =sequelize.define("Student",{
    id:{
        type:DataTypes.INTEGER ,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    name:{
        type:DataTypes.STRING  ,
        allowNull:true
    },
    rollno:{
        type:DataTypes.STRING  ,
        allowNull:false 
    },
    phoneNo:{
        type:DataTypes.INTEGER ,
        allowNull:true
    }
}
)
student.sync({force:false})
.then(()=>console.log("created tabel 2"))
.catch(()=>console.log("error 2"))

module.exports=student