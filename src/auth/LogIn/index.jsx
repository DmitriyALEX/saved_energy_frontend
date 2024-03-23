import  { useState } from "react"
import styles from './styles.module.css'
import RemindPass from '../RemindPass'
// BTNS
import SubmitBtn from '../../ui/Buttons/SubmitBtn'
//FORM 
import Form from "../../ui/FormAuth/Form"
import InputText from "../../ui/FormAuth/InputText"
import InputCheckbox from "../../ui/FormAuth/InputCheckbox"

// CONTEXT 
import { useUser } from '../../context/userId'

const LogIn = () => {

    // CONTEXT 
    const { setUserId } = useUser()

    // url to POST
    const URL = import.meta.env.VITE_URL_LOG

    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)

    //warning
    const [ notUser, setNotUser ] = useState(false)

    //remind
    const [ remind, setRemind ] = useState(false)

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
                password: password,
            })
            })
            
            if(response.status === 401) {
                // User not find
                setNotUser(true)
            } else if(response.status === 201) {
                const responseData = await response.json()
                // CONTEXT
                setUserId(responseData._id)
                //USERNAME LOCALSTORAGE
                window.localStorage.setItem('username', responseData.username)
                //warning
                setNotUser(false)
            }  
            else if (response.status === 200) {
                const responseData = await response.json()
                setUserId(responseData._id)
                console.log(responseData._id)
            }                           
        } catch (error) {
            console.error(error)
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if((userName !== '') && (password !== '')) {
            sendData()
        }
    }

    return (
        <section className={styles.wrapper}>
            {!remind 
                ?   <>
                        <section className={styles.login}>
                            <div className={styles.container_notice}>
                                {notUser && <p className={styles.notfind_notice}>User not find</p>}
                            </div>

                            <Form onSubmit={handleSubmit}>
                                {/* USERNAME */} 
                                <InputText
                                    type="text"
                                    label="Username"
                                    id="username"
                                    onChange={(e) => setUserName(e.target.value)}
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
                                <SubmitBtn label="LogIn"/> 
                            </Form> 
                        </section>
                        <div  className={styles.remind_container}>
                            <button 
                                onClick={() => {setRemind(!remind)}}
                                className={styles.remind_btn}
                            >Remind Password/Username</button>
                        </div>                      
                    </>
                : <RemindPass remind={remind} setRemind={setRemind}/>
            }
        </section>
    )
} 

export default LogIn