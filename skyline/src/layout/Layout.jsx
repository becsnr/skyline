import styles from './Layout.module.css'

import Input from "../components/Input"
import Temp from '../components/Temp'
import Icon from '../components/Icon'
import DaysForecast from '../components/DaysForecast'
import HourlyForecast from '../components/HourlyForecast'

function Layout({ weather }) {
    if (!weather) return <p>Loading...</p>;
    
    return (
        <div className={styles.layout}>

            <header className={styles.top}>

                <Input weather={weather} />

            </header>

            <section className={styles.middle}>

                <div className={styles.topWeather}>
                    <div className={styles.temp}>
                        <Temp weather={weather} />
                    </div>

                    <div className={styles.icon}>
                        <Icon weather={weather} />
                    </div>
                </div>

                <div className={styles.days}>
                    <DaysForecast weather={weather} />
                </div>

            </section>

            <section className={styles.hourly}>
                <HourlyForecast />
            </section>

        </div>
    )
}

export default Layout