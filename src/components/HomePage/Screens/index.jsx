import { useState } from 'react'
import styles from './styles.module.css'
// BTN
import NavigationBtn from '../../../ui/Buttons/NavigationBtn'

const Screens = ({setWievScreens}) => {
    
    const [idx, setIdx] = useState(0)

    let imgSrc = [
        {
            title: 'User dashboard',
            img: '/screens/dashboard_user.png',
        },
        {
            title: 'Saved user information',
            img: '/screens/saved_user.png',
        }, 
        {
            title: 'Admin panel to control all users',
            img: '/screens/dashboard_admin.png',
        },
        {
            title: 'User dashboard from admin panel',
            img: '/screens/userDashboard_admin.png',
        },
        {
            title: 'Saved user info from admin panel',
            img:  '/screens/userSaved_admin.png',
        }
    ]
    
    function hendleLeft() {
        setIdx(idx - 1)
    }

    function hendleRight() {
        setIdx(idx + 1)
    }

    return (
        <section className={styles.container_screens}>
            <div className={styles.container_close_btn}> 
                <NavigationBtn 
                    onClick={()=> setWievScreens(false)}
                    label=" &#8251; close"
                />
            </div>

            {/* SLIDER */}
            <section className={styles.slider}>

                {/* BTN LEFT */}
                <button 
                    className={idx === 0 ? styles.slider_btn_none  : styles.slider_btn}
                    onClick={hendleLeft}
                >&#8249;</button>

                {/* CONTENT */}
                <div className={styles.slider_content}>
                    <span 
                        className={styles.slider_title}
                        >{imgSrc[idx].title}
                    </span>
                    <img 
                        className={styles.slider_img}
                        src={imgSrc[idx].img} 
                    />                   
                </div>

                {/* BTN RIGHT */}
                <button
                    className={idx === imgSrc.length - 1 ? styles.slider_btn_none : styles.slider_btn}
                    onClick={hendleRight}
                >&#8250;</button> 
            </section>
        </section>
    )
}

export default Screens