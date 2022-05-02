const router = require("express").Router(); // importar o router do express
const Pessoa = require("../models/pessoa");

//GET

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
    name: this.name,
    idade: this.idade,
    profissao: this.profissao
});

try{
    const novaPessoa = await pessoa.save();
    res.send(novaPessoa);
    res.json({ error: null, msg: "Cadastro realizado com sucesso"});
}catch(error){
    res.status(400).json({ error });
}
console.log(novaPessoa);

});

// atualizar uma pessoa - POST

router.put("/:id", async (req,res) =>  {
    
const id = req.params.id; //param porque vem junto na URL

const pessoa = await Pessoa.findOne({_id: id});
    
    const updateData = {
    
    nome: req.body.nome,
    idade: req.body.idade,
    profissao: req.body.profissao
    };
    

    try{
    const pessoaAtualizada = Pessoa.findOneAndUpdate({ _id: id}, {$set: {updateData}}, {new: true}); //new: true é para estar atualizando apenas o necessário        
}
    catch(err){
        return res.status(400).json({error: "Usuário não existe"})
    }
});

module.exports = router;
