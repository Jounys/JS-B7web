class Person {

    static hands = 2;
    age = 0; // global

    constructor(name) { // Função
        this.name = name;  // this está se referindo a sua class
    }

    sayHi() {
        console.log(`${this.name} Diz Olá, ele tem ${Person.hands} mãos`)
    }

}

// Person.hands = 3;

let p1 = new Person('João') // Objeto   
p1.sayHi()