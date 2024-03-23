import styles from './styles.module.css'

const InputCheckbox = ({
    label,
    id,
    type,
    onChange,
    checked
}) => {
    return (
        <div className={styles.container}>
            <input
                type={type}
                onChange={onChange}
                checked={checked}
                className={styles.input}
            />
            <label
                htmlFor={id}
                className={styles.label_title}>
                {label}
            </label>
        </div>
    )
}

export default InputCheckbox