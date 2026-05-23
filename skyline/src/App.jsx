import { useEffect, useState } from "react"

import { getCoordsByCity, getHourlyForecast, getWeatherByCity, getWeatherByCoords, getForecast } from "./services/weatherApi";

import Layout from "./layout/Layout"

function App() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [hourly, setHourly] = useState([]);

  const [forecastDays, setForecastDays] = useState([]);

  // CIDADE ATUAL DO USUÁRIO
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        // API HG BRASIL
        const weatherData = await getWeatherByCoords(lat, lon);

        setWeather(weatherData);

        // API OPENWEATHER
        const hourlyData = await getHourlyForecast(lat, lon);

        setHourly(hourlyData.list);

        // FORECAST DAYS
        const forecastData = await getForecast(lat, lon);

        setForecastDays(forecastData);
      }
    );
  }, []);

  async function handleSearch() {

    // CIDADE HG BRASIL
    const weatherData = await getWeatherByCity(city);

    setWeather(weatherData);

    // GEO OPENWEATHER
    const coords = await getCoordsByCity(city);

    // HOURLY OPENWEATHER
    const hourlyData = await getHourlyForecast(coords.lat, coords.lon);

    setHourly(hourlyData.list)

    // FORECAST DAYS
    const forecastData = await getForecast(coords.lat, coords.lon);

    setForecastDays(forecastData);
  }

  return (
    <>
      <Layout 
        weather={weather} 
        city={city} 
        setCity={setCity} 
        hourly={hourly}
        handleSearch={handleSearch} 
        daysForecast={forecastDays}
      />
    </>
  )
}

export default App
