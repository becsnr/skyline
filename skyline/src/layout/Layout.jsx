import styles from './Layout.module.css'

import Input from "../components/Input"
import Temp from '../components/Temp'
import Icon from '../components/Icon'

function Layout() {
    return (
        <>
            <div className={styles.box}>
                <Input />
            </div>

            <div className={styles.container}>
                <Temp />
                <Icon />
            </div>
        </>
    )
}

export default Layout