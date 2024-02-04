let lista = [
    {id: 1, nome: 'Joao', sobrenome: 'Paulo'},
    {id: 2, nome: 'Joaquin', sobrenome: 'lacerda'},
    {id: 3, nome: 'Bonieky', sobrenome: 'Augusto'}
]
let lista2 = []

let pessoa = lista.find((item) => {
    return (item.nome == 'Joao') ? true : false;
})

// find() retorna o item. findIndex() retorna a posição.
// lista2 = lista.findIndex( function (item) {
//     return (item === 10) ? true : false;
// })

let res = lista2
// some(), retorna true ou false se algum item for true ou false // tradução: alguns
// lista2 = lista.some((item) => {
//     return (item > 50) ? true: false; // condição ternaria
// })

/*
// every(), retorna true ou false para todos os itens
lista2 = lista.every(function(item) {
    if(item > 20){
        return true;
    } else {
        return false;
    }
})
*/
/*
// filter(), retorna true ou false
lista2 = lista.filter(function (item) {
    if(item < 20){
        return true;
    } else {
        return false;
    }
})
*/
// map(), mapeia todo o array
// lista2 = lista.map(function (item){
//     return item * 2
// })

/*
for(let i in lista){
    lista2.push(lista[i] * 2)
}
*/
console.log(pessoa)
