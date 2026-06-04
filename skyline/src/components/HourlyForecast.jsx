import styles from './HourlyForecast.module.css'

function HourlyForecast({ hourly }) {
    if (!hourly || hourly.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            {hourly.slice(0, 6).map((item) => (
                <div key={item.dt} className={styles.card}>

                    <p className={styles.hour}>{item.dt_txt.slice(11, 16)}</p>

                    <img 
                        className={styles.icon} 
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                        alt={item.weather[0].description} 
                    />

                    <p className={styles.degree}>{Math.round(item.main.temp)}°</p>

                </div>
            ))}
        </div>
    )
}

export default HourlyForecast