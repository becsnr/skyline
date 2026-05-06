import styles from './Layout.module.css'

import Input from "../components/Input"
import Temp from '../components/Temp'

function Layout() {
    return (
        <>
            <div className={styles.box}>
                <Input />
            </div>

            <div className={styles.container}>
                <Temp />
            </div>
        </>
    )
}

export default Layout