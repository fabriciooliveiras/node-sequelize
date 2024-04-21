const Sequelize = require('sequelize');
const connection = require('./database');
const questionModel = require('./Question');

const Answer = connection.define('answer',{
    body:{
        type:Sequelize.STRING,
        allowNull:false
    },
    questionId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

//1 TO 1 RELATIONSHIP
Answer.belongsTo(questionModel);

//1 TO N RELATIONSHIP
questionModel.hasMany(Answer);


//CREATES THE TABLE ON THE DATABASE IF IT DOSEN'T EXIST
Answer.sync({force:false}).then(()=>{});

module.exports = Answer;