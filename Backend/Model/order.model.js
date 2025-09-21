const sequelize=require('../Config/db.config');
const {DataTypes}=require('sequelize');
const order =sequelize.define("order",{
    id:{
        type:DataTypes.INTEGER ,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    Cos_name:{
        type:DataTypes.STRING  ,
        allowNull:true
    },
    Seller_id:{
        type:DataTypes.STRING  ,
        allowNull:false 
    },
    Shipped_date:{
        type:DataTypes.INTEGER ,
        allowNull:true
    }
    
}
)
order.sync({force:false})
.then(()=>console.log("created tabel 2"))
.catch(()=>console.log("error 2"))

module.exports=order