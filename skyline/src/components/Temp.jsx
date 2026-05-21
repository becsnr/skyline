import styles from './Temp.module.css'

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
                <p>Vento</p>
                <p>Humidade</p>
                <p>{weather.results.wind_speedy}</p>
                <p>{weather.results.humidity}%</p>
            </div>
        </div>
    )
}

export default Temp