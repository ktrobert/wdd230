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