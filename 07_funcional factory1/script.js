// Conceito Factory/Fabrica

/* function criarPersonagem(name, lastName, age){
    return {
        name,
        lastName,
        age
    }
}

let personagem01 = criarPersonagem('João', 'Paulo', 23)
let personagem02 = criarPersonagem('Maria', 'Clara', 20)

console.log(personagem01)
console.log(personagem02) */

let person = {
    name: 'joão',
    lastName: 'Paulo',
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastName}`
    }, // Bonieky queria mostra que da para usar o this com Programação Funcional

    start() {
        console.log('Deu Start!')
    }
}

person.start()

console.log(person.getFullName())