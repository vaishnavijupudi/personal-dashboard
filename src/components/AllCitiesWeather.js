import React, { useState } from 'react';

const AllCitiesWeather = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`);
      if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
      }
      const data = await response.json();
      console.log(data);
      const lat = data[0].lat;
      const lon = data[0].lon;
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(weatherData);

  return (
    <div>
      <h2>Other Cities Weather</h2>  
      <form style={{ display: 'flex', justifyContent: 'space-around', width:'100%' }} onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter city name" value={cityName} onChange={handleInputChange} />
        <button style={{ border: 'none', padding: '10px', borderRadius:'20px', margin: '0 5px' }} type="submit">Get Weather</button>
      </form>
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

export default AllCitiesWeather;
