// const botão = document.querySelector('button')

class Person {

    age = 0; // global
    steps = 0;

    constructor(name,) { // Função
        this.name = name;  // this está se referindo a si mesmo
    }

    takeAsteps() {
        this.steps++;
    }
    
    setAge(newAge){ // Verificador
        if (typeof newAge == 'number'){
            this.age = newAge
        } else{
            console.log('Não Aceito! Somete números')
        }
    }
}

// Instâncias

let p1 = new Person('João')
let p2 = new Person('Maria')
let p3 = new Person('Letícia')

// p1.age = 23;

// p1.takeAsteps();

p1.setAge(23)

console.log(`Passos de ${p1.name}: ${p1.steps}`)

console.log(`o ${p1.name} tem ${p1.age} anos`)
// console.log(`o ${p2.name} tem ${p2.age} anos`)
// console.log(`o ${p3.name} tem ${p3.age} anos`)
