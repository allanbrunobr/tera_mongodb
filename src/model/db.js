const mongoose = require("mongoose");
//config

const dbName = "pessoasData";
const port = 3000; //avisa para o express qual a porta

//******** vem depois da conexão e teste GET abaixo */
//conexão mongoDB

mongoose.connect(`mongodb://localhost/${dbName}`);

module.exports = {
        dbName: dbName,
        porta: port
}