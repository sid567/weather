# Global weather app

Introduction:
The Global Weather App is a simple web application that allows users to get current weather information for any city and country in the world. Users can enter a city and country name, and the app will display the weather details, including location, temperature, weather condition, humidity, and wind speed.

# Features
1.User-Friendly Interface: Easy-to-use input fields for city and country names.

2.Weather Information:

Location (City and Country)

Temperature (in Celsius)

Weather Condition (e.g., Clear, Rainy)

Humidity (in percentage)

Wind Speed (in km/h)

3.Real-Time Weather Data: Fetches live weather details using the Weatherstack API.

4.Error Handling: Alerts the user if an invalid city or country is entered or if there is a problem with the API.

#Technology stack

HTML: For the structure of the app.

CSS: For styling (linked via style.css).

JavaScript: For interactivity and fetching data from the API.

Weatherstack API: Used to fetch real-time weather information.



# How it works

The user inputs a city and country name into the provided fields.

Upon submission, the JavaScript code sends a request to the Weatherstack API with the input values.

The API responds with the current weather information.

The application extracts relevant data from the API response and displays it to the user.

# Files and Structure

index.html: Contains the structure of the app.

style.css: Responsible for the app's appearance (not provided in this example).

back.js: Contains JavaScript logic for fetching and displaying weather data.


# API integration

The app uses the Weatherstack API for fetching weather information.

API Endpoint:
http://api.weatherstack.com/current

Required API Key:

Replace c46aa617791247a37dab8442c1d9d140 in the back.js file with your personal API key from Weatherstack.

# Error handling

If the API response indicates an error (e.g., invalid input or missing data), an alert box will display the error message.

If there is a network issue or other unexpected errors, a generic alert will notify the user.


# Example usage

Input:

City: Paris

Country: France

Output:

Location: Paris, France

Temperature: 15 ℃

Condition: Clear

Humidity: 60%

Wind Speed: 12 km/h

# Limitation

API Key Dependency: Requires a valid Weatherstack API key.

Free API Tier Limitations: The free Weatherstack API key may have limited requests per month and may not support HTTPS.

Basic Styling: The application uses minimal styling, which can be enhanced.

