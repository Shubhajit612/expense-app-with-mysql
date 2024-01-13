const { Sequelize } = require('sequelize');
const sequalize = require('../util/database');

const Product = sequalize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allownull: false,
        primaryKey:true
    },
    price:{
        type:Sequelize.INTEGER,
        autoIncrement:false,
        allownull:false,

    },
    product:{
        type:Sequelize.STRING,
        unique:true
    }

    
});

module.exports = Product;