import  { useState, useEffect } from 'react'
import styles from './auth.module.css'
import SignUp from './SignUp'
import LogIn from './LogIn'
import LogOut from './LogOut'
//BTNS
import NavigationBtn from '../ui/Buttons/NavigationBtn'
import ControlBtn from '../ui/Buttons/ControlBtn'
// CONTEXT
import { useUser } from '../context/userId'

const Auth = () => {
    const [ login, setLogin ] =  useState(false)
    const [ signup, setSignup ] =  useState(false)
    // closeBTN
    const [ closeFormBtn, setCloseFormBtn ] = useState(false)
    //closeFORM
    const [ closeForm, setCloseForm ] = useState(false)
    // CONTEXT
    const { userId } = useUser()

    function handleLogin() {
        setLogin(true)
        setSignup(false)
        setCloseForm(true)
    }

    function handleSignup() {
        setSignup(true) 
        setLogin(false)
        setCloseForm(true)
    }

    useEffect(() => {
        if(login === true || signup === true) {
            setCloseFormBtn(true)
        } 
    }, [login, signup])

    function handleClose() {
        setCloseForm(false)  
        setCloseFormBtn(false) 
    }

    return (
        <section className={closeForm ? styles.wrapper_auth_form : styles.wrapper}>
            {userId === null  
                ?   <>
                        {/* NAVIGATION MENU */}
                        <div className={styles.nav}>
                            <div className={styles.nav_auth}>
                                <NavigationBtn label="Log In" onClick={handleLogin}/>
                                <NavigationBtn label="Sign Up" onClick={handleSignup}/>
                            </div>

                            <span style={closeFormBtn ? {dispalay: 'block'} : {visibility: 'hidden'}}>
                                {<ControlBtn label="✖" onClick={handleClose}/> }
                            </span>
                        </div>

                        {/* FORM */}
                        <div className={styles.form_auth}>
                            {closeForm && 
                                <>
                                    {login &&  <LogIn />}
                                    {signup && <SignUp />}
                                </>      
                            }
                        </div>
                    </>
                :   <>
                        {/* NAVIGATION MENU IF USER IS LOGINED */}
                        <LogOut />
                    </> 
            }
        </section>
    )
} 

export default Auth