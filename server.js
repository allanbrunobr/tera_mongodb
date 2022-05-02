    //modulos
  const express = require("express");
  const mongoose = require("mongoose");
  const bodyParser = require("body-parser");
  const cors = require("cors");


  // routes

  // depois de criar o arquivo pessoaRoutes.js
  const pessoaRouter = require("./routes/pessoaRoutes.js");


  //config

  const dbName = "teraMongoDB";
  const port = 3000;
  const app = express(); // inicializa o express

  app.use(cors());
  app.use(express.json()); // para trabalhar com esse tipo de dados na comunicação
  
  // depois de criar o arquivo pessoaRoutes.js
  app.use("/api/pessoa/", pessoaRouter);
// depois escreve o arquivo pessoaRoutes.js


  //atrelar as rotas


  //******** vem depois da conexão e teste GET abaixo */
  //conexão mongoDB

mongoose.connect(
    `mongodb://localhost/${dbName}`
    );

  app.get("/", (req,res) => {
    res.json({ message: "Rota teste!"}); //uma resposta em json ajustado na linha 18
  });

  app.listen(port, () => {
      console.log(`Estamos na porta ${port}`);
  });
