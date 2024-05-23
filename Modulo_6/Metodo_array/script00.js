// let lista = ['ovo', 'farinha', 'manteiga', 'chocolate']

// lista.splice(0, 4)
// console.log(lista)

// lista[ lista.length ] = 'leite condensado';
/*
    toString(), formata em uma string
    join(''), formata em uma string separando com o parametro desejado    
    indexOf(''), procura um item no array e informa a posição dele se não achar informa -1
    concat(), pode concatenar com outro array

    // Altera o array diretamente

    sort(), organiza em ordem alfabetica
    reverse(), inverte o array
    pop(), remove o ultimo item do array
    shift(), remove o primeiro item do array
    push(), adiciona item ao array
    splice(posição, quantidade), remove do array com o parametro de posição e quantidade
    [], adiciona na posição espeficada, podendo tambem usar para susbituir

    push(): Adiciona um ou mais elementos ao final do array.
    
    pop(): Remove o último elemento do array.
    
    shift(): Remove o primeiro elemento do array.
    
    unshift(): Adiciona um ou mais elementos no início do array.
    
    concat(): Junta dois ou mais arrays e retorna um novo array.
    
    slice(): Retorna uma cópia de uma parte do array, sem modificá-lo.
    
    splice(): Adiciona ou remove elementos de um array em uma posição específica.
    
    forEach(): Executa uma função para cada elemento do array.
    
    map(): Cria um novo array com os resultados de aplicar uma função a cada elemento.
    
    filter(): Cria um novo array com todos os elementos que passam no teste de uma função.
    
    reduce(): Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
    
    some(): Verifica se pelo menos um elemento no array passa no teste de uma função.
    
    every(): Verifica se todos os elementos no array passam no teste de uma função.
    
    find(): Retorna o primeiro elemento que passa no teste de uma função.
    
    findIndex(): Retorna o índice do primeiro elemento que passa no teste de uma função.
    
    indexOf(): Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array.
    
    includes(): Verifica se um array contém um determinado elemento.
    
    join(): Junta todos os elementos do array em uma string, usando um separador especificado.
    
    reverse(): Inverte a ordem dos elementos no array.
    
    sort(): Ordena os elementos do array de acordo com uma função de comparação.
*/




    let abc = ['A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z']

    let a = abc.toString()

    let ab = a.split(', ')
    console.log(ab)
