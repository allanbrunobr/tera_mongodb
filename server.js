const app = require("./src/app");
const db = require("./src/model/db");




  app.get("/", (req,res) => {
    res.json({ message: "Rota teste!"}); //uma resposta em json ajustado na linha 18
  });

  app.listen(db.porta, () => {
      console.log(`Estamos na porta ${db.porta} e no banco ${db.dbName}`);
  });

 
