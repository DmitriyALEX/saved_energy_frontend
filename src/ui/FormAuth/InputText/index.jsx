import styles from './styles.module.css'

const InputText = ({ 
    label, 
    id, 
    type,  
    onChange, 
    showPassword}) => {

    const inputType = type === "password" && showPassword ? "text" : type;
    
    return (
        <div className={styles.input_container}>
            <label 
                htmlFor={id} 
                className={styles.label}>
                <em className={styles.label_title}>{label}</em>
            </label>

            <input
                type={inputType} 
                id={id} 
                className={styles.input}
                onChange={onChange}  
            />  
        </div>
    )
}

export default InputText