const Sequelize = require('sequelize');
const connection = require('./database');

const Question = connection.define('question',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

//CREATES THE TABLE ON THE DATABASE IF IT DOSEN'T EXIST
Question.sync({force:false}).then(()=>{});

module.exports = Question;