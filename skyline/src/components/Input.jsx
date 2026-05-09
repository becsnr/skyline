import styles from './Input.module.css'

function Input({ city, setCity, handleSearch }) {
    return (
        <>
            <input className={styles.box} type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Buscar cidade' />

            <button onClick={handleSearch}>Buscar</button>
        </>
    )
}

export default Input