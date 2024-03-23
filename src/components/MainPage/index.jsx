import HomePage from '../HomePage'
import UserSide from '../UserSide'
import AdminSide from '../AdminSide'
// CONTEXT 
import { useUser } from '../../context/userId'

const MainPage = () => {
    
    // CONTEXT
    const { userId } = useUser()

    const adm = import.meta.env.VITE_URL_ADM

    return (
        <>
            {userId !== null && userId !== adm
                ?   <UserSide userId={userId}/> 
                :   (userId === adm 
                        ? <AdminSide userId={userId}/>
                        : <HomePage/>
                    )
            }  
        </>
    )

}

export default MainPage