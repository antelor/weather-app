async function weatherCheck(city) {
    const apiKey = '7e15537baea7ddec4fb11ef35343500b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {mode: 'cors'});
    const weatherData = await response.json();
    //console.log(weatherData);

    let dataArr = {
        'city': city,
        'temp': weatherData.main.temp,
    };

    weatherDisplay(dataArr);
}

let weatherDisplay = (arr) => {
    let div = document.querySelector('[class=weatherDiv]');

    let cityDiv = document.createElement('div');
    cityDiv.innerText = arr.city;

    let tempDiv = document.createElement('div');
    tempDiv.innerText = arr.temp;

    div.appendChild(cityDiv);
    div.appendChild(tempDiv);
}

document.querySelector('[class=btnSearch').addEventListener("click", () => {
    let inputText = document.querySelector('[class=cityInput]').value;
    weatherCheck(inputText);
})