import styles from './styles.module.css'

const InputDash = ({label, id, type, onChange}) => {
    return ( 
        <div className={styles.container}>
            <label 
                htmlFor={id} 
                className={styles.label}>
                {label}
            </label>
            <input 
                type={type}
                id={id}
                className={styles.input}
                onChange={onChange}
            />
        </div>
    )
}

export default InputDash