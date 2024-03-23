import { useState, useEffect } from 'react'
import styles from './styles.module.css'
//COMPONENTS
import DashBoard from './UserDashBoard'
import Saved from './UserSaved'
//BTNS
import NavigationBtn from '../../ui/Buttons/NavigationBtn'

const UserSide = () => {

    //blog
    const [saved, setSaved ] = useState(false)

    //dashboard
    const [ dash, setDash ] = useState(false)

    function handleOpenBlog() {
        setSaved(true)
        setDash(false)
    }

    function handleDash() {
        setDash(true)
        setSaved(false)
    }

    // first render
    useEffect(() => {
        setDash(true)
    }, [])

    return (
        <section className={styles.wrapper}>
            {/* NAVIGATION */}
            <nav className={styles.nav_container}>  
                <div className={styles.nav}>
                    <NavigationBtn label="Saved" onClick={handleOpenBlog}/>
                    <NavigationBtn label="DashBoard" onClick={handleDash}/>
                </div>                       
            </nav>   
            {/* USER CONTENT  */}
            {dash && <DashBoard />}
            {saved && <Saved/>}
        </section>
    )
} 

export default UserSide