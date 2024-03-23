import { useState } from 'react'
import styles from './styles.module.css'
// IMG
import logo from '/images/logo.png'
import sheme from '/images/app_sheme.png'
import screens_priview from '/screens/screens_priview.png'

import AppSheme from './Sheme'
import Screens from './Screens'

const HomePage = () => {

    const [ wievSheme, setWievSheme ] = useState(false)

    const [ wievScreens, setWievScreens ]= useState(false)

    function handleDownload() {
        const downloadLink = document.createElement('a')
        downloadLink.href='/images/app_sheme.png'
        downloadLink.download = 'app_sheme'
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <main className={styles.container}>
            
            {   wievSheme 
            ?   <AppSheme setWievSheme={setWievSheme}/>

            :   wievScreens 
            ?   <Screens setWievScreens={setWievScreens}/>
                        
            :   <div className={styles.container_homepage}>
                    {/* HOMEPAGE */}
                    <div className={styles.container_logo_discription}>
                        {/* LOGO */}
                        <section className={styles.container_logo}>
                            <img 
                                className={styles.container_logo_icon}
                                src={logo} 
                            />
                            <h1
                                className={styles.title}
                            >SAVED ENERGY
                            </h1>
                        </section>

                        {/* DISCRIPTION */}
                        <section className={styles.discription}>
                            <ul className={styles.discription_list}> 
                                <li className={styles.discription_list_item}>
                                    <span className={styles.discription_list_item_title}>B2C service</span>
                                </li>
                                <li className={styles.discription_list_item}>
                                    You can create personal account to manage 
                                    statements like <b>Energy</b> or electricity bills and  pay them
                                </li>
                                <li className={styles.discription_list_item}>
                                    Make <b>Saved</b> where you can manage your own data like links, list of bookmarks
                                </li>
                                <li className={styles.discription_list_item}>
                                    This application also has Admin panel through which he can manage all users
                                </li>
                                <br/>
                                <li className={styles.discription_list_item}>
                                    <span className={styles.sourcecode_title}>Source code:</span> &nbsp;
                                    <a 
                                        href="https://github.com/DmitriyALEX/saved_energy_frontend"
                                        target="_blank"
                                        rel="noreferrer" 
                                        className={styles.sourcecode_link}
                                    >Frontend
                                    </a>
                                    &nbsp; 
                                    &nbsp;
                                    <a 
                                        href="https://github.com/DmitriyALEX/saved_energy_backend"
                                        target="_blank"
                                        rel="noreferrer" 
                                        className={styles.sourcecode_link}
                                    >Backend
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* SHEME AND SCREENS */}
                    <section className={styles.container_sheme_screens}>
                        {/* SHEME */}
                        <div className={styles.container_sheme}>
                            <div className={styles.container_sheme_nav}>
                                <button 
                                    className={styles.open_btn}
                                    onClick={()=> setWievSheme(true)}
                                >Wiev app Sheme
                                </button>
                                <button 
                                    className={styles.open_btn}
                                    onClick={handleDownload}
                                >Download
                                </button>
                            </div>
                            
                            <img 
                                className={styles.prev_img}
                                src={sheme} 
                                onClick={()=> setWievSheme(true)}
                                alt='app_sheme'
                            />
                        </div>
                        {/* SCREENS */}
                        <div className={styles.container_screens}>
                            <div className={styles.container_screens_nav}>
                                <button 
                                    className={styles.open_btn}
                                    onClick={()=> setWievScreens(true)}
                                >Wiev app Screens
                                </button>
                            </div>
                            
                            <img 
                                className={styles.prev_img}
                                src={screens_priview}
                                onClick={()=> setWievScreens(true)}
                                alt="screens_priview"
                            />
                        </div>
                    </section>
                </div>
            }
        </main>
    )
}

export default HomePage