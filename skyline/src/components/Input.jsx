import styles from './Input.module.css'

import { FaSearch } from "react-icons/fa";

function Input({ city, setCity, handleSearch }) {
    return (
        <section>
            <div className={styles.inputContainer}>
                <FaSearch />

                <input className={styles.box} type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Buscar cidade' />
            </div>

            <button onClick={handleSearch}>Buscar</button>
        </section>
    )
}

export default Input