const defaultCharacter = {
    name: '',
    life: 1,
    maxlife: 0,
    defense: 0
}

const createknight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxlife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxlife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMoster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxlife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMoster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxlife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = { // Cenário
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attaking, attaked) {
        if(attaking.life <= 0 || attaked.life <= 0) {
            log.addMensagem('Alguém está morto!')
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const actualAttack = attaking.attack * attackFactor;
        const actualDefense = attaked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attaked.life -= actualAttack;
            attaked.life = attaked.life < 0 ? 0 : attaked.life;
            log.addMensagem(`${attaking.name} causou ${actualAttack.toFixed(2)} de dano em ${attaked.name}`)
        }else {
            log.addMensagem(`${attaked.name} conseguiu defenser...`)
        }
        this.update()
    }
}

const log = {
    list: [],
    addMensagem(msg) {
        this.list.push(msg)
        this.render()
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}