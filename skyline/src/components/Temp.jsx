import styles from './Temp.module.css'

import { FaWind, FaTint } from 'react-icons/fa'

function Temp({ weather }) {
    if (!weather) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <div className={styles.temp}>
                <h1>{weather.results.city_name}</h1>
                <p className={styles.grau}>{weather.results.temp} C°</p>
                <p className={styles.description}>{weather.results.description}</p>
            </div>

            <div className={styles.info}>
                <h2><FaWind /> Vento</h2>
                <h2><FaTint /> Humidade</h2>
                <h3>{weather.results.wind_speedy}</h3>
                <h3>{weather.results.humidity}%</h3>
            </div>
        </div>
    )
}

export default Temp