// Exemplo de callback com promise

function pegarTemperatura(){
    return new Promise(function(resolve, reject) {
        console.log("Pegando temperatura...")

        setTimeout(function(){
            resolve('40 na sombra')
        }, 3000);
    });
};

let temp = pegarTemperatura()
temp.then((resultado) => { 
    console.log('Temperatura: '+ resultado)
}).catch(function(error){ // Em caso de erro
    console.log('Erro!')
})