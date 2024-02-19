function formatTime(time){
    return time < 10 ? `0${time}`:`${time}`
};

// setInterval(()=> {
//     let tempo = new Date();
//     let h = tempo.getHours();
//     let m = tempo.getMinutes();
//     let s = tempo.getSeconds();
//     let mi = tempo.getMilliseconds();

//     document.querySelector('.time').innerHTML = `${h}:${formatTime(m)}:${formatTime(s)}:${mi}`
// }, 10);

function showTime(){
    let tempo = new Date();
    let h = tempo.getHours();
    let m = tempo.getMinutes();
    let s = tempo.getSeconds();
    let mi = tempo.getMilliseconds();

    document.querySelector('.time').innerHTML = `${h}:${formatTime(m)}:${formatTime(s)}:${mi}`
};

let timer = setInterval(showTime, 10);


// clearInterval() limpa o intervalo
// setTimeout() roda um temporarizador
// clearTimeout() limpa o setTimeout