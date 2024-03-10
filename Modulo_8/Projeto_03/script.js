document.querySelector('.busca').addEventListener('submit', async (evento) => {
    evento.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        clearInfo()
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1d21351f9bb76815d5ece0a662e62c75&units=metric&lang=pt_br`

        let results = await fetch(url);
        let json = await results.json();
        console.log(json) 

        if(json.cod === 200) {

            showInfo({
                nombre: json.name,
                UF: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })

        } else {
            clearInfo();
            showWarning('Cidade não encontrada.');
        }
    } else {
        clearInfo();
    }
});

function showInfo(json){
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${json.nombre} ${json.UF}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>°C<sup/>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}`
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`

    document.querySelector('.resultado').style.display = 'block';
};

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
};

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};