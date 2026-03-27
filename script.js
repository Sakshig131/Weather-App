async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "056f1c763d3e51bd2747622618338dbd";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("result").innerHTML = "❌ City not found";
            return;
        }

        let temp = data.main.temp;
        let weather = data.weather[0].main;
        let humidity = data.main.humidity;

        document.getElementById("result").innerHTML = `
            🌡️ Temperature: ${temp}°C <br>
            ☁️ Weather: ${weather} <br>
            💧 Humidity: ${humidity}%
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "⚠️ Error fetching data";
    }
}