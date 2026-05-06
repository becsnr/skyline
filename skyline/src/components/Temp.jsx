import styles from './Temp.module.css'

function Temp() {
    return (
        <div className={styles.container}>
            <h1>C°</h1>
            <h2>Ensolarado</h2>

            <div className={styles.info}>
                <p>Vento</p>
                <p>Humidade</p>
                <p>km/h</p>
                <p>%</p>
            </div>
        </div>
    )
}

export default Temp