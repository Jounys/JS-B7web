// Código Síncrono

let nome = 'João';
let sobrenome = 'Paulo';
let fullName = nome + ' ' + sobrenome;

console.log(fullName)

// Código Assícrono

function alertar() {
    console.log('Hello!')
}

setTimeout(alertar, 3000)