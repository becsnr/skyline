import styles from './Icon.module.css'

function Icon({ weather }) {
    const icon = weather.weather[0].icon;

    const icons = {
        "01d": "clear_day",
        "01n": "clear_night",

        "02d": "cloudly_day",
        "02n": "cloudly_night",

        "03d": "cloud",
        "03n": "cloud",

        "04d": "cloud",
        "04n": "cloud",

        "09d": "rain",
        "09n": "rain",

        "10d": "rain",
        "10n": "rain",

        "11d": "storm",
        "11n": "storm",

        "13d": "snow",
        "13n": "snow",

        "50d": "fog",
        "50n": "fog",
    }

    return (
        <div className={styles.container}>
            <img src={`/icons/${icons[icon]}.png`} alt={weather.weather[0].description} />
        </div>
    )
}

export default Icon