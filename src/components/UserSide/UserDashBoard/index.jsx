import { useState, useEffect } from 'react'
import SetData from './SetData'
import TableUserData from './TableUserData'
// CONTEXT
import { useUser } from '../../../context/userId'

const DashBoard = () => {

    // CONTEXT
    const { userId } = useUser()

    //LOCAL STORAGE 
    const getUsername = window.localStorage.getItem('username')

    const [fetchData, setFetchData ] = useState([])

    const URL = import.meta.env.VITE_URL_GET_DASH.replace(':userId', userId)

    //get data at first render
    useEffect(() => {
        fetch(URL)
        .then(res=> res.json())
        .then(data => setFetchData(data))
    }, [userId])

    return (
        <>
            {userId && <></>}
            <span style={{fontFamily: 'Salara-Regular', fontSize: '2rem'}}>{getUsername}</span>
            <SetData  fetchData={fetchData} setFetchData={setFetchData}/>
            <TableUserData fetchData={fetchData} setFetchData={setFetchData}/>
        </>
    )
}

export default DashBoard