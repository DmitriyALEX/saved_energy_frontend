import styles from './styles.module.css'

const Form = ({ children, onSubmit }) => {
    return (
        <>
            <form 
                onSubmit={onSubmit}
                className={styles.form}
            >{children}</form>
        </>
    )
}

export default Form 