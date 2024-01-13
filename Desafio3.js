//variaveis
const prompt = require("prompt-sync")();
class personagem{
    constructor(nome,idade,classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
}

let char = new personagem (prompt("Digite o nome do personagem: "),prompt("Digite a idade: "),prompt("Digite a classe (mago, guerreiro,monge,ninja): "))
let atacar = prompt("atacar? (sim ou nao): ")

if (atacar === "sim"){
    if (char.classe === "mago"){
       console.log ("o mago atacou usando magia")
    } else if (char.classe === "guerreiro"){
        console.log ("o guerreiro atacou usando espada")
    }else if (char.classe === "monge"){
        console.log ("o monge atacou usando artes marciais")
    }else if (char.classe === "ninja"){
        console.log ("o ninja atacou usando shuriken")
    }
}       
    else{
    console.log("Você não atacou")
}
