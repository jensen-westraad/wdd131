
document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-ZA");



    const mobileFooter = document.getElementById("modification-mobile");
    const wideFooter = document.getElementById("modification-wide");

    if (mobileFooter) mobileFooter.textContent = formatted;
    if (wideFooter) wideFooter.textContent = formatted;


    const temperature = 9;
    const windSpeed = 6;


    const isWindChillValid = temperature <= 10 && windSpeed > 4.8;


    const windChillElements = document.querySelectorAll(".wind-chill");

    if (isWindChillValid) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElements.forEach(el => {
            el.textContent = `${windChill.toFixed(1)} °C`;
        });
    } else {
        windChillElements.forEach(el => {
            el.textContent = "N/A";
        });
    }
});

//Wind chill calculation (metric formula)
function calculateWindChill(t, v) {
    // t = temperature in °C, v = wind speed in km/h
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}
