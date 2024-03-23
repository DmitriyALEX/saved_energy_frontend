import styles from './styles.module.css'

const SubmitBtn = ({ label }) => {
    return (
        <button type="submit" className={styles.submit}>
            {label}
        </button>
    )
}

export default SubmitBtn