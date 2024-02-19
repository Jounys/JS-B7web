let pessoa = {
    nome: 'João',
    sobrenome: 'Paulo',
    idade: 23,
    social: {
        facebook: 'B7web',
        instagram:{
            url: '@Bonieky',
            seguidores: 1100
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

// let {nome:pessoaNome, sobrenome, idade = 0} = pessoa;

// Pegando objeto dentro de outros objetos e tambem renomeando
// let { nome, idade, social:{ instagram:{url:instagram} }} = pessoa

let { nome, idade, social:{ instagram }} = pessoa

console.log(nome, idade, instagram)