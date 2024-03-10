// Dados iniciais

let Square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
}

let player = '';
let warning = '';
let playing = false;

reset();
// Eventos
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

// Funções
function itemClick(evento){
    let item = evento.target.getAttribute('data-item')
    console.log('Clicou em:', item)
    if(playing && Square[item] === ''){
        Square[item] = player;
        renderSquare();
        toglePlayer();
    }
}
function reset(){
    warning = '';

    let random = Math.floor(Math.random() * 2);
 player = (random === 0) ? 'x':'o';

    for(let i in Square){
        Square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
};

function renderSquare(){
    for(let i in Square){
        let item = document.querySelector(`div[data-item=${i}]`)

        item.innerHTML = Square[i];
    }

    checkGame();
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function toglePlayer(){
    player = (player === 'x') ? 'o' : 'x';
    renderInfo();
}

function checkGame() {
    if(checkWinnerFor('x')){
        warning = 'O "X" venceu!';
        playing = false;
    } else if(checkWinnerFor('o')){
        warning = 'o "O" venceu!';
        playing = false;
    } else if(isFull()){
        warning = 'Deu empate!'
        playing = false;
    }
}

function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let w in pos){
        let pArray = pos[w].split(',');
        let hasWon = pArray.every(option => Square[option] === player);

        // let hasWon2 = pArray.every((option) => {
        //     if(Square[option] === player) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })

        if(hasWon) {
            return true;
        }
    }

    return false;
}

function isFull(){
    for(let i in Square){
        if(Square[i] === ''){
            return false;
        }
    }

    return true;
}