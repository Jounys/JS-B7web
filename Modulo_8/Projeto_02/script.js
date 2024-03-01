let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function clockDigital(){
    let digital = new Date();
    let second = digital.getSeconds();
    let minute = digital.getMinutes();
    let hour = digital.getHours()

    digitalElement.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    console.log(sDeg)
    
    secondElement.style.transform = `rotate(${sDeg}deg)`;
    minuteElement.style.transform = `rotate(${mDeg}deg)`;
    hourElement.style.transform = `rotate(${hDeg}deg)`;
};

function formatTime(hora){
    return hora < 10 ? `0${hora}`: hora
};

setInterval(clockDigital, 1000)
clockDigital()