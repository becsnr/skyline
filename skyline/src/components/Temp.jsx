import styles from './Temp.module.css'

import { FaMapMarker ,FaWind, FaTint } from 'react-icons/fa'

import Icon from './Icon';

function Temp({ weather }) {
    if (!weather) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <div className={styles.top}>

                <div className={styles.content}>

                    <div className={styles.temp}>
                        <h1> <FaMapMarker /> {weather.name}</h1>
                        <p className={styles.description}>{weather.weather[0].description}</p>
                        <p className={styles.grau}>{Math.round(weather.main.temp)} C°</p>
                        <p>Sensação térmica: {Math.round(weather.main.feels_like)}°</p>
                        
                    </div>

                    <div className={styles.icon}>
                        <Icon weather={weather} />
                    </div>
                </div>

                <div className={styles.info}>
                    <div>
                        <h2><FaWind /> Vento</h2>
                        <h3>{weather.wind.speed} km/h</h3>
                    </div>
                    <div>
                        <h2><FaTint /> Humidade</h2>
                        <h3>{weather.main.humidity}%</h3>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Temp