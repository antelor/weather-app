async function weatherCheck(city) {
    const apiKey = '7e15537baea7ddec4fb11ef35343500b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    let dataArr = {
        'city': city,
        'temp': weatherData.main.temp,
        'temp_max': weatherData.main.temp_max,
        'temp_min': weatherData.main.temp_min,
    };

    weatherDisplay(dataArr);
}

let weatherDisplay = (arr) => {
    let div = document.querySelector('[class=mainWeather]');

    let cityDiv = document.querySelector('[class=cityDiv]');
    if ( cityDiv == null ) {
        cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv');
    }
    cityDiv.innerText = arr.city;
    
    let tempDiv = document.querySelector('[class=tempDiv]');
    if ( tempDiv == null ) {
        tempDiv = document.createElement('div');
        tempDiv.classList.add('tempDiv');
    }
    tempDiv.innerText = arr.temp;

    let minMax = document.querySelector('[class=minMaxDiv]');
    if ( minMax == null ) {
        minMax = document.createElement('div');
        minMax.classList.add('minMaxDiv');
    }
    minMax.innerText = `Max: ${arr.temp_max} Min: ${arr.temp_min}`;

    div.appendChild(cityDiv);
    div.appendChild(tempDiv);
    div.appendChild(minMax);
}

document.querySelector('[class=btnSearch').addEventListener("click", () => {
    let inputText = document.querySelector('[class=cityInput]').value;
    weatherCheck(inputText);
})