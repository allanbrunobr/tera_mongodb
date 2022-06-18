const app = require("./src/app");
const mongoose = require("mongoose");
//config

const dbName = "pessoasData";
const port = 3000; //avisa para o express qual a porta

//******** vem depois da conexão e teste GET abaixo */
//conexão mongoDB

mongoose.connect(`mongodb://localhost/${dbName}`);


  app.get("/", (req,res) => {
    res.json({ message: "Rota teste!"}); //uma resposta em json ajustado na linha 18
  });

  app.listen(port, () => {
      console.log(`Estamos na porta ${port} e no banco ${dbName}`);
  });

 
