import styles from './Icon.module.css'

function Icon({ weather }) {
    const condition = weather.results.condition_slug;

    return (
        <div className={styles.container}>
            <img src={`/icons/${condition}.png`} alt="" />
        </div>
    )
}

export default Icon