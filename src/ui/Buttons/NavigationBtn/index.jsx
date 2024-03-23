import styles from './styles.module.css'

const NavigationBtn = ({onClick, label}) => {
    return (
        <button 
        onClick={onClick}
        className={styles.navigation}>{label}</button>
    )
}

export default NavigationBtn