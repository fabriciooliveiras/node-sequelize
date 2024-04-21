const Sequelize = require('sequelize');

const connection = new Sequelize('Study','root','admin123',{
    root:'localhost',
    dialect:'mysql'
});

module.exports = connection;