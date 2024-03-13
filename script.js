const key = "6f513cb84e6cf9be007332adfc33fa0d"


function colocarDadosnaTela (datas){
    console.log(datas)
    document.querySelector(".cidade").innerHTML = "Tempo em " + datas.name
    document.querySelector(".temp").innerHTML = Math.floor(datas.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = datas.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade de " + datas.main.humidity + "%"
    document.querySelector (".img-previsao").src = `https://openweathermap.org/img/wn/${datas.weather[0].icon}.png`
}

async function search_city(city) {

    const datas = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    colocarDadosnaTela(datas)
}

function button_click() {
    const city = document.querySelector(".input-cidade").value
    search_city(city)
}



