const Sequelize = require('sequelize');
const dbConfig = require('./connection');

const connection = new Sequelize('Study',dbConfig.user,dbConfig.password,{
    root:'localhost',
    dialect:'mysql'
});

module.exports = connection;