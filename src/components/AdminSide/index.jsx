import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import TableAllUsers from './TableAllUsers'

const AdminSide = () => {
    //counting
    const URL = import.meta.env.VITE_URL_ADM_GET_US
    const URL_DASH = import.meta.env.VITE_URL_ADM_GET_DASH
    const URL_SAVED = import.meta.env.VITE_URL_ADM_GET_SAVED

    //users
    const [users, setUsers] = useState([])
    //dashes
    const [userDashes, setUserDashes] = useState({})
    //saved
    const [userSaved, setUserSaved] = useState({})

    //first render admin panel(table)
    useEffect(() => {
        async function getUserData() {
            try {
                const userData = await getUsers();
                const dashData = await getDashes();
                const savedData = await getSaved();
        
                setUsers(userData);
                countUserDashes(userData, dashData);
                countUserSaved(userData, savedData);
            } catch (error) {
                console.error(error);
            }
        }
        getUserData()
    }, [])
    
    async function getUsers() {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    
    async function getDashes() {
        const response = await fetch(URL_DASH);
        const data = await response.json();
        return data;
    }
    
    async function getSaved() {
        const response = await fetch(URL_SAVED);
        const data = await response.json();
        return data;
    }

    //filter users by ID
    function countUserDashes(users, dash) {
        const dashCounts = {}
        users.forEach(user => {
            const userDashCounts = dash.filter(d => d.author === user._id)
            dashCounts[user._id] = userDashCounts
        }) 
        setUserDashes(dashCounts);
    }
    
    function countUserSaved(users, save) {
        const saveCounts = {}
        users.forEach(user => {
            const userSaveCounts = save.filter(s => s.author === user._id)
            saveCounts[user._id] = userSaveCounts
        })  
        setUserSaved(saveCounts);
    }
 
    return (
        <section className={styles.container_adminside}> 
            <TableAllUsers 
                //users
                users={users} 
                setusers={setUsers}
                //dashes
                userDashes={userDashes}
                //saved
                userSaved={userSaved}
            /> 
        </section>
    )
} 

export default AdminSide