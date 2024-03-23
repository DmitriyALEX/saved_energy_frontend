import NavigationBtn from '../../ui/Buttons/NavigationBtn'
// CONTEXT
import { useUser } from '../../context/userId'

const LogOut = () => {

    const { setUserId } = useUser()

    function logout() {
        window.localStorage.removeItem('u')
        setUserId(null)
        window.localStorage.removeItem('username')
    }

    return (
        <>
            <NavigationBtn label="Log Out" onClick={logout}/>
        </> 
    )    
}

export default LogOut