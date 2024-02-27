// String com um JSON

    '{"nome": "joao", "idade": 90}'
    
    // JSON.parse converte o arquivo JSON em objeto
let pessoa = JSON.parse('{"nome": "joao", "idade": 90}')

console.log(pessoa.nome)
