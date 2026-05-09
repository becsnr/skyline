const apiKey = import.meta.env.VITE_HG_KEY;

// CORDENADAS DO USUARIO
export async function getWeatherByCoords(lat, lon) {

    const url = new URL("/weather", "https://api.hgbrasil.com");

    url.searchParams.set("format", "json-cors");

    url.searchParams.set("key", apiKey);

    url.searchParams.set("lat", lat);

    url.searchParams.set("lon", lon);

    const response = await fetch(url.href);

    const data = await response.json();

    console.log(data);

    return data;
}