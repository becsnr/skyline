import { useEffect, useState } from "react"

import { getWeatherByCoords } from "./services/weatherApi";

import Layout from "./layout/Layout"

function App() {
  const [weather, setWeather] = useState(null);

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

  return (
    <>
      <Layout weather={weather} />
    </>
  )
}

export default App
