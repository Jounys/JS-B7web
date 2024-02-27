/*
let lista = ['joao', 'maria', 'leticia', 'ana']

console.log( Object.keys(lista)) // pega chave
console.log( Object.values(lista)) // pega valor
console.log( Object.entries(lista)) // cria um array unico para cada chave e valor
*/

let pessoa = {
    nome: 'joão',
    sobrenome: 'Alves',
    idade: 23
};
// retorna um array com as propriedades
console.log( Object.keys(pessoa))
console.log( Object.values(pessoa))
console.log( Object.entries(pessoa))