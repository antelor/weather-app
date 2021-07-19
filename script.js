async function weatherCheck(city) {
    const apiKey = '7e15537baea7ddec4fb11ef35343500b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {mode: 'cors'});
    const weatherData = await response.json();
    //console.log(weatherData);

    let dataArr = {
        'city': city,
        'temp': weatherData.main.temp,
        'temp_max': weatherData.main.temp_max,
        'temp_min': weatherData.main.temp_min,
        'feels_like': weatherData.main.feels_like,
        'pressure': weatherData.main.pressure,
        'humidity': weatherData.main.humidity,
        'wind_speed': weatherData.wind.speed,
        'clouds': weatherData.clouds.all,
    };

    weatherDisplay(dataArr);
}

let weatherDisplay = (arr) => {
    let div = document.querySelector('[class=mainWeather]');
    div.innerText = "";

    let cityDiv = document.querySelector('[class=cityDiv]');
    if ( cityDiv == null ) {
        cityDiv = document.createElement('div');
        cityDiv.classList.add('cityDiv');
    }
    cityDiv.innerText = arr.city;
    div.appendChild(cityDiv);
    
    let tempDiv = document.querySelector('[class=tempDiv]');
    if ( tempDiv == null ) {
        tempDiv = document.createElement('div');
        tempDiv.classList.add('tempDiv');
    }
    tempDiv.innerText = `${arr.temp} °C `;
    div.appendChild(tempDiv);

    let minMax = document.querySelector('[class=minMaxDiv]');
    if ( minMax == null ) {
        minMax = document.createElement('div');
        minMax.classList.add('minMaxDiv');
    }
    minMax.innerText = `Max: ${arr.temp_max} Min: ${arr.temp_min}`;
    div.appendChild(minMax);


    let otherDiv = document.querySelector('[class=otherWeather]');

    let feels_like = document.querySelector('[class=feels_like]');
    if ( feels_like == null ) {
        feels_like = document.createElement('div');
        feels_like.classList.add('feels_like');
    }
    feels_like.innerText = `Sensacion termica: ${arr.feels_like}`;
    otherDiv.append(feels_like);

    let pressure = document.querySelector('[class=pressure]');
    if ( pressure == null ) {
        pressure = document.createElement('div');
        pressure.classList.add('pressure');
    }
    pressure.innerText = `Presion atmosferica ${arr.pressure}`;
    otherDiv.append(pressure);

    let humidity = document.querySelector('[class=humidity]');
    if ( humidity == null ) {
        humidity = document.createElement('div');
        humidity.classList.add('humidity');
    }
    humidity.innerText = `Humedad: ${arr.humidity}%`;
    otherDiv.append(humidity);

    let wind_speed = document.querySelector('[class=wind_speed]');
    if ( wind_speed == null ) {
        wind_speed = document.createElement('div');
        wind_speed.classList.add('wind_speed');
    }
    wind_speed.innerText = `Velocidad del viento: ${arr.wind_speed} km/h`;
    otherDiv.append(wind_speed);

    let clouds = document.querySelector('[class=clouds]');
    if ( clouds == null ) {
        clouds = document.createElement('div');
        clouds.classList.add('clouds');
    }
    clouds.innerText = `Nubosidad: ${arr.clouds}%`;
    otherDiv.append(clouds);
}

document.querySelector('[class=btnSearch').addEventListener("click", () => {
    let inputText = document.querySelector('[class=cityInput]').value;
    weatherCheck(inputText);
})