import styles from './Layout.module.css'

import Input from "../components/Input"
import Temp from '../components/Temp'
import Icon from '../components/Icon'
import DaysForecast from '../components/DaysForecast'
import HourlyForecast from '../components/HourlyForecast'

function Layout() {
    return (
        <div className={styles.layout}>

            <header className={styles.top}>

                <Input />

            </header>

            <section className={styles.middle}>

                <div className={styles.topWeather}>
                    <div className={styles.temp}>
                        <Temp />
                    </div>

                    <div className={styles.icon}>
                        <Icon />
                    </div>
                </div>

                <div className={styles.days}>
                    <DaysForecast />
                </div>

            </section>

            <section className={styles.hourly}>
                <HourlyForecast />
            </section>

        </div>
    )
}

export default Layout