/*
const temperature = Number(document.getElementById("temperature").innerText);
const windSpeed = Number(document.getElementById("windSpeed").innerText);

if (temperature <= 50 && windSpeed > 3.0) {
    let windChill = 35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16);
    document.getElementById("windChill").innerHTML = windChill.toFixed(2);
} else {
    document.getElementById("windChill").innerHTML = "N/A";

}
*/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherLocation = 'American Fork';
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
    captionDesc.textContent = desc;
}