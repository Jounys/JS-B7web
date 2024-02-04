const char = createSorcerer('João')
const monster = createLittleMoster()

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)


console.log(char.name)
console.log(char.life)