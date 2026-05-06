import styles from './Input.module.css'

function Input() {
    return (
        <input className={styles.box} type="text" placeholder='Buscar cidade' />
    )
}

export default Input