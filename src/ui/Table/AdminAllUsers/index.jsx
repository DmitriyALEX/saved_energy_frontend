 import { useState } from 'react'
import styles from '../styles.module.css'
import SubNavigationBtn from '../../Buttons/SubNavigationBtn'

import AdminDash from '../../../components/AdminSide/AdminDash'
import AdminSaved from '../../../components/AdminSide/AdminSaved'

const AdminAllUsers = ({ TableHeaders, users, userDashes, userSaved }) => {

    const adm = import.meta.env.VITE_URL_ADM
    
    //render only users
    const filteredUsers = users.filter(user => user._id !== adm)
    
    //BTNS
    const [ showDash, setShowDash ] = useState(false)
    const [ showSaved, setShowSaved ] = useState(false)
    //filteredata
    const [ dashData, setDashData ] = useState([])
    const [ savedData, setSavedData ] = useState([])
    //filteredUsername
    const [ checkedUsername, setCheckedUsername ] = useState('')

    function showUserDashes(id) {  
        setDashData(userDashes[id])
        setShowDash(true)
        setShowSaved(false)

        //username
        userDashes[id].forEach(x => {
            users.find(y => {
                if (x.author === y._id) {
                    setCheckedUsername(y.username)
                }
            })
        })      
    }

    function showUserSaved(id) {
        setSavedData(userSaved[id])
        setShowSaved(true)
        setShowDash(false)

        //username
        userSaved[id].forEach(x => {
        users.find(y => {
            if (x.author === y._id) {
                setCheckedUsername(y.username)
            }
        })
        })      
    }

    return(
        <>
        {showDash 
            ?   <AdminDash
                    // BTNS
                    setShowDash={setShowDash}
                    //USERNAME
                    checkedUsername={checkedUsername}
                    //DATA
                    dashData={dashData}
                /> 
            :   showSaved 
            ?   <AdminSaved 
                    // BTNS
                    setShowSaved={setShowSaved}
                    //USERNAME
                    checkedUsername={checkedUsername}
                    //DATA
                    savedData={savedData}
                /> 
            :   <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{fontFamily: 'Salara-Regular', fontSize: '1.5rem'}}>&#8226; ADMIN DASHBOARD &#8226;</span>
                    <table className={styles.table}>
                        {/* HEAD */}
                        <thead className={styles.table_head}>
                            <tr className={styles.table_head_rows}>
                                {TableHeaders.map((header, idx) => (
                                    <th  className={styles.table_head_cell}
                                    key={idx}
                                    >{header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* BODY */}
                        <tbody className={styles.table_body}>
                            {filteredUsers.map((value, idx) => { 
                                return (
                                    <tr
                                        className={idx % 2 === 0 
                                            ? styles.table_body_rows_even
                                            : styles.table_body_rows_row
                                        }
                                        key={value._id}
                                    >
                                        <td className={styles.table_body_cell}>
                                            {idx + 1}
                                        </td>
                                        <td className={styles.table_body_cell}>{value.username}</td>
                                        <td className={styles.table_body_cell}>
                                            <div className={styles.table_body_cell_value}>
                                                {/* value */}
                                                {userSaved[value._id].length}
                                                {/* button */}
                                                {userSaved[value._id].length !== 0 && 
                                                    <SubNavigationBtn 
                                                        onClick={() => showUserSaved(value._id)}
                                                    label="more"
                                                />}  
                                            </div>                    
                                        </td>
                                        <td className={styles.table_body_cell}>
                                            <div className={styles.table_body_cell_value}>
                                                {/* value */}
                                                {userDashes[value._id].length}
                                                {/* button */}
                                                {userDashes[value._id].length !== 0 && 
                                                    <SubNavigationBtn 
                                                        onClick={() => showUserDashes(value._id)}
                                                        label="more"
                                                    />
                                                } 
                                            </div>                       
                                        </td>  
                                    </tr>)}
                                )
                            }
                        </tbody>
                    </table>
                </section>  
        }
        </> 
    )
}

export default AdminAllUsers