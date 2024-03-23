import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext(null)

export const UserProvider = ( { children }) => {
    const [ userId, setUserId ] = useState(null)

    //SET RANDOM VALUE TO ID
    function randomFunc() {
        let str = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let res = Array.from({ length: 15 }, () => str.charAt(Math.floor(Math.random() * str.length))).join('')
        return res
    }

    const random = randomFunc()
    
    useEffect(() => {
        //get random value from LocalStorage
        const getRandomValue = window.localStorage.getItem('u')
        if(getRandomValue !== null) {
            // get user id
            const user = getRandomValue.slice(0, 24)
            setUserId(user)
        }
    }, [])

    useEffect(() => {
        if(userId !== null) {
            // add random value
            const setRandomValue = userId + random
            //set random value to LocalStorage
            window.localStorage.setItem('u', setRandomValue)
        }
    }, [userId])

    return (
        <UserContext.Provider value={{userId, setUserId}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

