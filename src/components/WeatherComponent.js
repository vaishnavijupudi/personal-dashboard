import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Current Weather</h2>
      {weatherData ? (
        <>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
