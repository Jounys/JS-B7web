// Elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

// Função
function novaLista(e){
    if(e.key === 'Enter'){
        const NewLi = document.createElement('li')
        NewLi.innerHTML = input.value
        lista.appendChild(NewLi)

        input.value = ''
    }
}
// Evento
input.addEventListener('keyup', novaLista)