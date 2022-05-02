const mongoose = require("mongoose")

const schemaPessoa = mongoose.Schema({
	nome: {type: String, require: true},
	idade: { type: Number, min: 18, max: 65},
	profissao: {type: String, require: true},
})

// pessoamodel será o nome da collection que será criada no MongoDB, e no PLURAL = pessoasmodels
const Pessoa = mongoose.model("Pessoa ", schemaPessoa);
module.exports = Pessoa; // para ser enxergado