import styles from './DaysForecast.module.css'

import { FaTint } from 'react-icons/fa'

function DaysForecast({ weather }) {
    return (
        <div className={styles.container}>

            {weather.map((day) => (

                <div key={day.dt} className={styles.card}>
                    <h2 className={styles.day}>
                        {new Date(day.dt_txt).toLocaleDateString("pt-br", {weekday: "short" })}
                    </h2>

                    {/* <p>{day.weather[0].description}</p> */}


                    <p className={styles.temp}>
                        {Math.round(day.main.temp)}°
                    </p>
                    
                    <img 
                        className={styles.icon} 
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                        alt={day.weather[0].description} 
                    />

                    <p className={styles.rain}>
                        <FaTint />
                        {Math.round(day.pop * 100)}%
                    </p>

                    
                </div>
            ))}
        </div>
    )
}

export default DaysForecast