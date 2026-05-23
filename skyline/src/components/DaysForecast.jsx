import styles from './DaysForecast.module.css'

function DaysForecast({ weather }) {
    return (
        <div className={styles.container}>
            {weather.map((day) => (
                <div key={day.dt}>
                    <p>{day.dt_txt.slice(5,10)}</p>

                    <p>{Math.round(day.main.temp)}°</p>

                    <p>{day.weather[0].description}</p>
                </div>
            ))}
        </div>
    )
}

export default DaysForecast