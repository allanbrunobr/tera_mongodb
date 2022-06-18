const router = require("express").Router(); // importar o router do express
const Pessoa = require("../model/entities/pessoa");


router.get("/buscarTodos", async(req,res) => {
    
    try{
    const pessoas = await Pessoa.find();
        return res.json(pessoas);
}
    catch(err){
        return res.status(400).json({error: "Usuário não existe"})
    }
});

//GET BY ID

router.get("/buscar/:id", async(req,res) => {
    
    const id = req.params.id; //param porque vem junto na URL

    try{
    const pessoa = await Pessoa.findOne({_id: id});
        res.json(pessoa);
}
    catch(err){
        return res.status(400).json({error: "Usuário não existe"})
    }
});

// registrar uma pessoa - POST

router.post("/cadastrar", async (req,res) => {
//retendo os dados

const nome = req.body.nome;
const idade = req.body.idade;
const profissao = req.body.profissao;

//campos obrigatorios

if(nome == null || profissao == null) {
    return res.status(400).json({ error: "Por favor, preencha todos os campos obrigatórios"});
}

//criando a pessoa
const pessoa = new Pessoa({
    nome: nome,
    idade: idade,
    profissao: profissao
});

try{
    const newPessoa = await pessoa.save();
    
    //return res.send({ pessoa});

   //return res.send(newPessoa);
    
    return res.json({data: newPessoa});

     
  }catch(error){
    res.status(400).json({ error });
}

});

// atualizar uma pessoa - PUT

router.put("/alterar/:id", async (req,res) =>  {
    
const id = req.params.id; //param porque vem junto na URL

const pessoa = await Pessoa.findOne({_id: id});
    
    const updateData = {
    
    nome: req.body.nome,
    idade: req.body.idade,
    profissao: req.body.profissao
    };
    
    try{
    const pessoaAtualizada = await Pessoa.findOneAndUpdate({ _id: id}, {$set: updateData}, {new: true}); //new: true é para estar atualizando apenas o necessário        
    return res.json({pessoaAtualizada});
}
    catch(err){
        return res.status(400).json({error: "Usuário não existe"})
    }
});

router.delete("/deletar/:id", async(req,res) => {
    
    const id = req.params.id; //param porque vem junto na URL

    try{
    await Pessoa.deleteOne({_id: id});
        res.status(204).send();
}
    catch(err){
        return res.status(400).json({error: "Usuário não existe"})
    }
});


module.exports = router;
