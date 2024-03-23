import styles from './styles.module.css'

const FormDash = ({ children, onSubmit }) => {
    return ( 
            <form 
                onSubmit={onSubmit}
                className={styles.container}>
                {children}
            </form>
    )
}

export default FormDash