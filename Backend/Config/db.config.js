const {Sequelize} = require('sequelize');
const sequelize =new Sequelize("flipcart","root","",{
    host:'localhost',
    dialect:"mysql",
});
module.exports= sequelize