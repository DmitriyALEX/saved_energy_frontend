import  { useState } from 'react'
import styles from './styles.module.css'
//FORM 
import Form from '../../ui/FormAuth/Form'
import InputText from '../../ui/FormAuth/InputText'
import InputCheckbox from '../../ui/FormAuth/InputCheckbox'
//BTNS
import SubmitBtn from '../../ui/Buttons/SubmitBtn'
// CONTEXT 
import { useUser } from '../../context/userId'

const SignUp = () => {

    // CONTEXT 
    const { setUserId } = useUser()

    const [ userName, setUserName ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)

    // User already exists
    const [ checkUser, setChecksUser ] = useState(false)

    const URL = import.meta.env.VITE_URL_SIGN

    function handleChange() {
        setShowPassword(!showPassword)
    }

    async function sendData() {
        try {
            const response = await fetch(URL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                email: userEmail,
                password: password,
            })
            })

            if(response.status === 401) {
                setChecksUser(true)
            } else if(response.status === 201) {
                const responseData = await response.json()
                // CONTEXT
                setUserId(responseData._id)
                //USERNAME LOCALSTORAGE
                window.localStorage.setItem('username', responseData.username)
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if((userName !== '') && (userEmail !== '') && (password !== '')) {
            sendData()
            if(checkUser) {
                setChecksUser(!checkUser)
            }
        }
    }

    return (
        <section className={styles.wrapper}>
            {/* NOTICE */}
            <div className={styles.container_notice}>
                {checkUser && <p className={styles.exist_notice}><b>User already exists</b></p>}
            </div>
            
            <Form  onSubmit={handleSubmit}>
                {/* USERNAME */}
                <InputText
                    type="text"
                    label="Username"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                {/* EMAIL */}
                <InputText
                    type="email"
                    label="Email"
                    id="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                />

                {/* PASSWORD */}
                <InputText
                    type="password"
                    label="Password"
                    id="password"
                    showPassword={showPassword}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* CHECKBOX */}
                <InputCheckbox
                    type="checkbox"
                    label="Show Password"
                    id="showPSW"
                    checked={showPassword}
                    onChange={handleChange}
                />

                {/* SUBMIT */}
                <SubmitBtn label="SignUp"/>
            </Form>
        </section>
    )
}

export default SignUp