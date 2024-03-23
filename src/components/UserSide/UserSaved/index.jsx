import { useState, useEffect } from 'react'
import CreateSaved from './CreateSaved'
import GetSaved from './GetSaved'
// CONTEXT
import { useUser } from '../../../context/userId'

const Saved = () => {
    // CONTEXT
    const { userId } = useUser()

    //LOCAL STORAGE 
    const getUsername = window.localStorage.getItem('username')

    const [ savedData, setSavedData ] = useState([])

    const URL = import.meta.env.VITE_URL_GET_POST.replace(':userId', userId)

    useEffect(() => {
        if(userId !== null) {
            fetch(URL)
            .then(res => res.json())
            .then(data => setSavedData(data))
        }
    }, [userId])

    return ( 
        <>
            <span style={{fontFamily: 'Salara-Regular', fontSize: '2rem'}}>{getUsername}</span>
            <CreateSaved savedData={savedData} setSavedData={setSavedData}/>
            <GetSaved savedData={savedData} />
        </>
    )
}

export default Saved