let lista = ['ovo', 'farinha', 'manteiga', 'chocolate']

lista.splice(0, 4)
console.log(lista)

// lista[ lista.length ] = 'leite condensado';
/*
    toString(), formata em uma string
    join(''), formata em uma string separando com o parametro desejado    
    indexOf(''), procura um item no array e informa a posição dele
    concat(), pode concatenar com outro array

    // Altera o array diretamente

    sort(), organiza em ordem alfabetica
    reverse(), inverte o array
    pop(), remove o ultimo item do array
    shift(), remove o primeiro item do array
    push(), adiciona item ao array
    splice(posição, quantidade), remove do array com o parametro de posição e quantidade
    [], adiciona na posição espeficada, podendo tambem usar para susbituir
*/


/**
 * 
    let abc = ['A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z']

    let a = abc.toString()

    let ab = a.split(', ')
    console.log(ab)
*/