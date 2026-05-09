import { useEffect, useState } from "react"

import { getWeatherByCity, getWeatherByCoords } from "./services/weatherApi";

import Layout from "./layout/Layout"

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // CIDADE ATUAL DO USUÁRIO
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        const data = await getWeatherByCoords(lat, lon);

        setWeather(data);
      }
    );
  }, []);

  async function handleSearch() {
    console.log("clicou")

    const data = await getWeatherByCity(city);

    console.log(data)

    setWeather(data);
  }

  return (
    <>
      <Layout weather={weather} city={city} setCity={setCity} handleSearch={handleSearch} />
    </>
  )
}

export default App
