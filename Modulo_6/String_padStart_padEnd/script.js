let telefone = '9'

console.log( telefone.padEnd(9, '*'))

// padEnd() rebece uma quantidade e vai preencher o restante se estiver faltando
// padStart() rebece uma quantidade e vai preencher o restante se estiver faltando do inicio

let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4)

let maskedDigits = lastDigits.padStart(16, '*')

console.log(maskedDigits)