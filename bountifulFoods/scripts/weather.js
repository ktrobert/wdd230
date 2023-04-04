function calculateWindChill(temperature, windSpeed){
    if (temperature <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 +
            0.6215 * temperature -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return "N/A";
    } 
}

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.getElementById("windChill");
const windSpeed = document.getElementById("windSpeed");


const weatherLocation = 'Carlsbad';
const weatherUnits = 'imperial';
const weatherId = 'e2dff56ff0c0d4e0cad3ccbdd3065825';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=${weatherUnits}&appid=${weatherId}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // displayResults(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    windSpeed.innerHTML = weatherData.wind.speed;
    windChill.innerHTML = calculateWindChill(weatherData.main.temp,weatherData.wind.speed);
}
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherLocation}&units=${weatherUnits}&appid=${weatherId}`;


async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayForecast(data);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();
const forecastDiv = document.getElementById("forecast");
const dayNames = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
function displayForecast(data){
    let table = document.createElement("table");
    let forecastIndex = 0;
    let days = [];
    let highs = [];
    let lows = [];
    for(let day = 0; day < 3; day++){
        let row = document.createElement("tr");
        let high = -1000;
        let low = 1000;
        
        for(let i = 0; i < 8; i++) {
            let weather = data.list[forecastIndex];
            if(weather.main.temp > high){
                high = weather.main.temp;
            }
            if(weather.main.temp < low){
                low = weather.main.temp;
            }
            console.log(weather.sys.pod + "  " + weather.dt_txt);
            forecastIndex++; 
        }
        highs.push(high);
        lows.push(low);
        days.push(data.list[forecastIndex-8].dt_txt);
    }

    let dayrow = document.createElement("tr");
    let highrow = document.createElement("tr");
    let lowrow = document.createElement("tr");
    table.appendChild(dayrow);
    table.appendChild(highrow);
    table.appendChild(lowrow);

    for(let i = 0; i < 3; i++){
        let day = document.createElement("th");
        let date = new Date(Date.parse(days[i]));
        day.innerHTML = dayNames[date.getDay()];
        dayrow.appendChild(day);

        let high = document.createElement("td");
        high.innerHTML = highs[i];
        highrow.appendChild(high);
        
        let low = document.createElement("td");
        low.innerHTML = lows[i];
        lowrow.appendChild(low);
    }
    let label = document.createElement('h1');
    label.innerHTML= "Three day forecast"
    forecastDiv.appendChild(label);
    forecastDiv.appendChild(table);
}