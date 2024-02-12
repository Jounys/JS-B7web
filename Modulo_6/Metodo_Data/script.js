/*
let dia = d.getDate();
let diaSemana = d.getDay(); // começa no domingo com 0(zero)
let mes = d.getMonth(); // Começa em 0(zero)
let hora = d.getHours();
*/

let d = new Date();

d.setDate(d.getDate() + 5);
//let time = d.getTime(); // tempo desde 1970 em miliSeconds
console.log(d)

function formatNumber(number){
    return number < 10 ? `0${number}` : `${number}`
}

function tempo(){
    setInterval(() => {
        let d = new Date();
        let minuto = formatNumber(d.getMinutes());
        let segundos = formatNumber(d.getSeconds());
        let miliSeconds = formatNumber(d.getMilliseconds());
        document.getElementById('tempo').innerHTML = `${minuto}:${segundos}:${miliSeconds}`
    }, 10)

}

tempo()