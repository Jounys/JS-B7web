// Escuta todos os eventos de teclado
document.body.addEventListener('keydown', (evento) => {
    // Chama a função de reprodução do som e recebe como parametro o evento da tecla apertada
    playSound(evento.code.toLowerCase()); // Codigo da tecla formatado para minusculo
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
})

// Função que seleciona os elementos HTML e toca o som selecionado
function playSound(sound){
    // A função playSound() recebe o codigo da tecla formatado e passado para o seletor com uma interpolação string
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
};

function playComposition(songArray){
        
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250;
    }
};