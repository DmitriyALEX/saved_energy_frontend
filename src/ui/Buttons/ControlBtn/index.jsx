import styles from './styles.module.css'

const ControlBtn = ({onClick, label}) => {
    return (
        <button 
            onClick={onClick}
            className={styles.control}
        >{label}</button>
    )
}

export default ControlBtn