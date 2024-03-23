import Saved from '../../../../ui/Saved'
// CONTEXT
import { useUser } from '../../../../context/userId'

const GetSaved = ({ savedData }) => {

    // CONTEXT
    const { userId } = useUser()

    return (
        <>
            {userId && <Saved savedData={savedData}/>}
        </> 
    )
}

export default GetSaved