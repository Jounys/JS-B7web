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

};

// function pegarNomeCompleto(objeto){
//     return `${objeto.nome} ${objeto.sobrenome}`
// }

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url}}}){
    return `${nome} ${sobrenome} (siga em ${url})`
}

console.log(pegarNomeCompleto(pessoa))