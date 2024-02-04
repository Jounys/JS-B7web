// const botão = document.querySelector('button')

class Person {

    _age = 0; // global
    steps = 0;

    constructor(fistName, lastName) { // Função
        this.fistName = fistName;  // this está se referindo a si mesmo
        this.lastName = lastName;
    }

    takeAsteps() {
        this.steps++;
    }

    get fullName() {
        return `${this.fistName} ${this.lastName}`
    }

    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x;
        } else {
            console.log('Inválido!')
        }
    }
    
}

// Instâncias

let p1 = new Person('João', 'alves')
let p2 = new Person('Maria', 'Nascimento')
let p3 = new Person('Letícia', 'Do Vale')

p1.age = 32

console.log(`o ${p3.fullName} tem ${p1.age} anos`)

