

const form = document.getElementById('weather-form');
const weatherResult = document.getElementById('weather-result');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    const apiKey = 'c46aa617791247a37dab8442c1d9d140'; 
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city},${country}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.success === false) {
            alert(data.error.info);
            return;
        }

        weatherResult.classList.remove('hidden');
        locationElement.textContent = `${data.location.name}, ${data.location.country}`;
        temperatureElement.textContent = data.current.temperature;
        conditionElement.textContent = data.current.weather_descriptions[0];
        humidityElement.textContent = data.current.humidity;
        windSpeedElement.textContent = data.current.wind_speed;
    } catch (error) {
        alert('An error occurred while fetching weather data. Please try again.');
        console.error(error);
    }
});
