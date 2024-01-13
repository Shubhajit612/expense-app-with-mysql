
const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense','root','Toton@612',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;