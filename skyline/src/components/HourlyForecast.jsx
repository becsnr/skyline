import styles from './HourlyForecast.module.css'

function HourlyForecast({ hourly }) {
    if (!hourly || hourly.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            {hourly.slice(0, 6).map((item) => {

                return (
                    <div key={item.dt} className={styles.card}>

                        <p>{item.dt_txt.slice(11, 16)}</p>

                        <p>{Math.round(item.main.temp)}°</p>

                    </div>
                )
                
            })}
        </div>
    )
}

export default HourlyForecast