// const botão = document.querySelector('button')

class Person {

    age = 0; // global

    constructor(name) { // Função
        this.name = name;  // this está se referindo a sua class
    }

    sayHi(){
        console.log(`${this.name} diz OI!`)
    }
}

class Estudante extends Person {

    constructor(name, id){
        super(name)
        this.id = id
    }

    sayHi(){
        console.log(`${this.name} É um estudante e diz OI!`) // Sobrescreveu o primeiro sayHI 
    }

}

let p1 = new Estudante('João', 1)
p1.sayHi()

// p1.age = 23
// let p2 = new Estudante('Pedro', 2 )
// p2.age = 27

// console.log(`O ${p2.name} tem ${p2.age} anos e matrícula ${p2.id}`)