# Weather Information Service 

## Overview
This Weather Service project provides real-time weather data for various locations worldwide. It allows users to query weather conditions, forecasts, and other meteorological data using a RESTful API.

## Features
- Real-time weather updates.
- 7-day weather forecast.
- Supports multiple locations.
- Customizable data filters.

## Technologies Used
- **Programming Language:** Nodejs
- **Data Source:** Weatherstack API

## Installation
1.Initialize a Node.js project:
   ```bash
  mkdir weather-service
  cd weather-service
  npm init -y
   ```
2. Install dependencies:
   ```bash
   npm install express axios dotenv
   ```
3. Set up environment variables:
   ```bash
   export WEATHER_API_KEY='your-api-key-here'
   ```
4. Run the application:
   ```bash
   node index.js
   ```

## Usage
You can access the API by sending HTTP requests to the server. 
