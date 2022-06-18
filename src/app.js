//modulos
const express = require("express");
const app = express();


const cors = require("cors");
app.use(cors());


// routes


// depois de criar o arquivo pessoaRoutes.js
 const pessoaRouter = require("./routes/pessoaRoutes.js");




 
 app.use(express.json()); // para trabalhar com esse tipo de dados na comunicação
 app.use

 app.use("/api/pessoa/", pessoaRouter);



module.exports = app;
