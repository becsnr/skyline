import { useEffect, useState } from "react"

import { getCoordsByCity, getHourlyForecast, getWeatherByCity, getWeatherByCoords, getForecast, getCitySuggestions } from "./services/weatherApi";

import Layout from "./layout/Layout"

function App() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [hourly, setHourly] = useState([]);

  const [forecastDays, setForecastDays] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

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

  // BUSCAR CIDADE
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

  // SUGESTÃO DE CIDADES
  async function handleChange(e) {
    const value = e.target.value;

    setCity(value);

    if (value.length >= 2) {
      const cities = await getCitySuggestions(value);

      setSuggestions(cities);
    } else {
      setSuggestions([]);
    }
  }

  // SELECIONAR CIDADE NA SUGESTÃO
  async function handleSelectCity(cityData) {
    setCity(cityData.name);

    const weatherData = await getWeatherByCity(cityData.name);
    setWeather(weatherData);

    const hourlyData = await getHourlyForecast(cityData.lat, cityData.lon);
    setHourly(hourlyData.list);

    const forecastData = await getForecast(cityData.lat, cityData.lon);
    setForecastDays(forecastData);

    setSuggestions([]);
  }
  return (
    <>
      <Layout 
        weather={weather} 
        city={city} 
        setCity={setCity} 
        hourly={hourly}
        handleSearch={handleSearch} 
        onChange={handleChange}
        suggestions={suggestions}
        onSelectCity={handleSelectCity}
        daysForecast={forecastDays}
      />
    </>
  )
}

export default App
