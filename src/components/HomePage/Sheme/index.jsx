import styles from './styles.module.css'
import sheme from '/images/app_sheme.svg'
// BTN
import NavigationBtn from '../../../ui/Buttons/NavigationBtn'

const AppSheme = ({ setWievSheme }) => {
    return (
        <div className={styles.container}>
            {/* CLOSE WIEV BTN */}
            <div className={styles.container_close_btn}> 
                <NavigationBtn 
                    onClick={()=> setWievSheme(false)}
                    label="&#8251;close"
                />
            </div>

            <div className={styles.container_img}>
                <img 
                    className={styles.sheme_img}
                    src={sheme}
                    alt="sheme"
                />
            </div>
        </div>
    )
}

export default AppSheme

