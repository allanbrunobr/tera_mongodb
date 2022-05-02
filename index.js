const express = require("express")
const mongoose = require("mongoose")
const Pessoa = require("./models/pessoa") 

mongoose
.connect( "mongodb://localhost:27017/TERA",
                { useNewUrlParser: true} );

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
    console.log("Estamos conectados");
});

// ****************criando dados
/*const bruno = new Pessoa({
    nome: "Bruno",
    idade: 44,
    profissao: "Analista de Sistemas"
})

const arthur = new Pessoa({
    nome: "Arthur",
    idade: 82,
    profissao: "Analista de Sistemas"
})

arthur.save(function (err){
    if (err) return handleError(err);
});
*/

//buscar uma pessoa

/*
Pessoa.findOne({ nome: "Bruno" }, function(err, pessoa){
    console.log(pessoa);
});
*/

// ************* inserir várias pessoas

/* Pessoa.insertMany([
{nome: "Pedro", idade: 40, profissao: "Padeiro"},
{nome: "Carlos", idade: 23, profissao: "Desenvolvedor Python"},
{nome: "Marina", idade: 34, profissao: "Psicopedagoga"}

]) */


// ***************para resgatar todas as pessoas que estão no banco 

async function getPessoas(){
  const pessoas = await Pessoa.find({}).exec()
console.log(pessoas);
}

//chama a função

//getPessoas();


// ***************para resgatar todas as pessoas com parametros passados 

async function getPessoa(nome){
    const pessoa = await Pessoa.find({nome: nome}, {nome: 1}).exec(); //retorna apenas o campo nome e o ID
    if(pessoa.length === 0) {
        console.log("Esta pessoa não existe");
    } else {
        console.log(pessoa)
    }
}

// **************** consulta pelo nome

//getPessoas("Pedro");

// *************** Deletar registro

/* 
Pessoa.deleteOne({nome: "Pedro"}).exec();

getPessoas("Pedro"); 

*/

// ******* ATUALIZANDO O REGISTRO

//Pessoa.updateOne({nome: "Marina"}, {profissao: "Gerente de unidade"}).exec();

/*
async function getPessoaByNomeIdade(nome, idade){

    const pessoa = await Pessoa
                        .where('idade').gte(idade)
                        .where('nome', nome)
                        .exec();
                        
    if(pessoa.length === 0){
        console.log("Esta pessoa não existe");
    }else{
        console.log(pessoa);
    }

}

getPessoaByNomeIdade("Bruno", 50);

*/