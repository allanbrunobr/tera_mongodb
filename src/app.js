//modulos
const express = require("express");
const app = express();

// depois de criar o arquivo pessoaRoutes.js
const pessoaRouter = require("./routes/pessoaRoutes");

const cors = require("cors");
app.use(cors());


// routes





 app.use(express.json()); // para trabalhar com esse tipo de dados na comunicação
 app.use

 app.use("/api/pessoa/", pessoaRouter);



module.exports = app;
