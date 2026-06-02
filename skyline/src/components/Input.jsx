import styles from './Input.module.css'

import { FaSearch } from "react-icons/fa";

function Input({ city, handleSearch, onChange, suggestions }) {
    return (
        <section className={styles.container}>
            <div className={styles.searchArea}>
                <div className={`${styles.inputContainer} ${suggestions?.length > 0 ? styles.hasSuggestions : ''}`}>
                    <FaSearch />

                    <input className={styles.box} type="text" value={city} onChange={onChange} placeholder='Buscar cidade' />
                </div>

                {suggestions?.length > 0 && (
                    <div className={styles.suggestions}>
                        {suggestions.map((item) => (
                            <div key={`${item.lat}-${item.lon}`} className={styles.suggestion}>
                                {item.name}
                                {item.state ? `, ${item.state}` : ""}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button onClick={handleSearch}>Buscar</button>
        </section>
    )
}

export default Input