const connection = require('./database/database');
const questionModel = require('./database/Question');
const answerModel = require('./database/Answer');

connection
    .authenticate()
    .then(()=>{console.log('Connection done.')})
    .catch((error)=>{console.log(error);});

let num = 0;

//INSERT INTO
if(num === 1){
    questionModel
    .create({
        title:'Pergunta 4',
        description:'Descrição 4'
    })
    .then(()=>{console.log('New question created.');});
}

//SELECT *
if(num === 2){
    questionModel
    .findAll({raw:true,order:[['id','DESC']]})
    .then(questions=>{console.log(questions);});
}

//SELECT WHERE
if(num === 3){
    let selectedId = 1;
    questionModel
    .findOne({raw:true,where:{id:selectedId}})
    .then(question=>{if(question != undefined) console.log(question);});
}

//DELETE WHERE
if(num === 4){
    let selectedId = 1;
    questionModel
    .destroy({where:{id:selectedId}})
    .then(()=>{console.log('Question deleted.');});
}

//UPDATE SET
if(num === 5){
    let selectedId = 4;
    questionModel.update({title:'Título atualizado',description:'Descrição atualizada'},{where:{id:4}})
    .then(()=>{console.log('Question updated.');});
}