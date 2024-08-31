const express = require('express');
const axios = require('axios');
require('dotenv').config();
const access_key = 'aef8d80b80257e4f534f8d9cff005f94';

const app = express();
const port = 3001;
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the Weather Service. Use /weather?city=CityName to get weather info.');
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send('Please provide a city.');
  }

  try {
    const apiKey = process.env.WEATHERSTACK_API_KEY;
    //const response = await axios.get(`http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;
    const response = await axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
    const weatherData = response.data;

    if (weatherData.error) {
      return res.status(400).send(weatherData.error.info);
    }

    res.send({
      location: weatherData.location.name,
      temperature: weatherData.current.temperature,
      weather_descriptions: weatherData.current.weather_descriptions[0],
      wind_speed: weatherData.current.wind_speed,
      humidity: weatherData.current.humidity,
      time: weatherData.location.localtime,
    });
  } catch (error) {
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Weather service running on http://localhost:${port}`);
});

