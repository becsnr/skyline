import styles from './Layout.module.css'

import Input from "../components/Input"

function Layout() {
    return (
        <>
            <div className={styles.box}>
                <Input />
            </div>

            <div className={styles.container}>

            </div>
        </>
    )
}

export default Layout