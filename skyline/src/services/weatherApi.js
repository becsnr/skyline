const openKey = import.meta.env.VITE_OPENWEATHER_KEY;

// LAT/LON
export async function getCoordsByCity(city) {

    const url = new URL("https://api.openweathermap.org/geo/1.0/direct");

    url.searchParams.set("q", city);

    url.searchParams.set("limit", 1);

    url.searchParams.set("appid", openKey);

    const response = await fetch(url);

    const data = await response.json();

    return data[0];
}

// CORDENADAS DO USUARIO
export async function getWeatherByCoords(lat, lon) {

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");

    url.searchParams.set("lat", lat);

    url.searchParams.set("lon", lon);

    url.searchParams.set("appid", openKey);

    url.searchParams.set("units", "metric");

    url.searchParams.set("lang", "pt_br");

    const response = await fetch(url);

    return await response.json();
}

// PESQUISAR CIDADES
export async function getWeatherByCity(city) {
    const coords = await getCoordsByCity(city);

    return await getWeatherByCoords(coords.lat, coords.lon);
}

// PREVISÃO HORÁRIOS
export async function getHourlyForecast(lat, lon) {

    const url = new URL("https://api.openweathermap.org/data/2.5/forecast");

    url.searchParams.set("lat", lat);

    url.searchParams.set("lon", lon);

    url.searchParams.set("appid", openKey);

    url.searchParams.set("units", "metric");

    url.searchParams.set("lang", "pt_br");

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

// PREVISÃO DIAS
export async function getForecast(lat, lon) {
    const url = new URL(`https://api.openweathermap.org/data/2.5/forecast`);

    url.searchParams.set("lat", lat);

    url.searchParams.set("lon", lon);

    url.searchParams.set("appid", openKey);

    url.searchParams.set("units", "metric");

    url.searchParams.set("lang", "pt_br");

    const response = await fetch(url);

    const data = await response.json();

    const dailyForecast = data.list.filter((item) => {
        return item.dt_txt.includes("12:00:00");
    });

    return dailyForecast;
}

// SUGERIR CIDADES NA BUSCA
export async function getCitySuggestions(city) {
    const url = new URL("https://api.openweathermap.org/geo/1.0/direct");

    url.searchParams.set("q", city);

    url.searchParams.set("limit", 5);

    url.searchParams.set("appid", openKey);

    const response = await fetch(url);

    return await response.json();
}