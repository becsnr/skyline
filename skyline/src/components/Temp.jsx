import styles from './Temp.module.css'

function Temp({ weather }) {
    if (!weather) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h1>{weather.results.city_name}</h1>
            <p>{weather.results.temp}C°</p>
            <p>{weather.results.description}</p>

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