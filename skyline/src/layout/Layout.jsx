import styles from './Layout.module.css'

import Input from "../components/Input"
import Temp from '../components/Temp'
import DaysForecast from '../components/DaysForecast'
import HourlyForecast from '../components/HourlyForecast'

function Layout({ weather, city, setCity, hourly, handleSearch, onChange, suggestions, daysForecast }) {
    if (!weather) return <p>Loading...</p>;
    
    return (
        <div className={styles.layout}>

            <header className={styles.top}>

                <Input city={city} setCity={setCity} handleSearch={handleSearch} onChange={onChange} suggestions={suggestions} />

            </header>

            <section className={styles.middle}>

                <Temp weather={weather} />

                <div className={styles.days}>
                    <DaysForecast weather={daysForecast} />
                </div>

            </section>

            <section className={styles.hourly}>
                <HourlyForecast hourly={hourly} />
            </section>

        </div>
    )
}

export default Layout