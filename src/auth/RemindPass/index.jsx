import { useState } from 'react'
import styles from './styles.module.css'
//FORM 
import Form from '../../ui/FormAuth/Form'
import InputText from '../../ui/FormAuth/InputText'
//BTNS
import SubmitBtn from '../../ui/Buttons/SubmitBtn'

const RemindPass = ({ remind, setRemind }) => {

    const [ userEmail, setUserEmail ] = useState('')
    //User found
    const [ isFind, setIsFind ] = useState(false)
    //User not found
    const [ notFind, setNotFind ] = useState(false)

    const URL = import.meta.env.VITE_URL_REM

    async function sendData() {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
            })
            }
        )
        if(response.status === 201) {
            setIsFind(true)
            setNotFind(false)
        } else if (response.status === 400) {
            setNotFind(true)
            setIsFind(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        sendData()
    }
    
    return (
        <section className={styles.wrapper}>
            {/* NOTICE */}
            <div className={styles.container_notice}>
                {isFind && <p className={styles.isfind_notice}>Check your Email</p>}
                {notFind && <p className={styles.notfind_notice}>User not found</p>}
            </div>
            {/* FORM */}
            <Form onSubmit={handleSubmit}>
                <InputText
                    type="email"
                    label="Email"
                    id="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                 {/* SUBMIT */}
                <SubmitBtn label="Send"/>
            </Form>
            {/* RETURN */}
            <div className={styles.return_container}>
                <button onClick={() => setRemind(!remind)} className={styles.return_btn}>Return</button>
            </div>
        </section>
    )
}

export default RemindPass 