// Factory é um conceito

class Person {

    age = 0; // global

    constructor(name) { // Função
        this.name = name;  // this está se referindo a sua class
    }

}

function createPerson(name, age) {
    let p = new Person(name)
    p.age = age;
    return p
}

let p = createPerson(`João`, 23)
console.log(`${p.name} tem ${p.age} anos`)