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
                        <h1> <FaMapMarker /> {weather.results.city_name}</h1>
                        <p className={styles.description}>{weather.results.description}</p>
                        <p className={styles.grau}>{weather.results.temp} C°</p>
                        
                    </div>

                    <div className={styles.icon}>
                        <Icon weather={weather} />
                    </div>
                </div>

                <div className={styles.info}>
                    <div>
                        <h2><FaWind /> Vento</h2>
                        <h3>{weather.results.wind_speedy}</h3>
                    </div>
                    <div>
                        <h2><FaTint /> Humidade</h2>
                        <h3>{weather.results.humidity}%</h3>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Temp