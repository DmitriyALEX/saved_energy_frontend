import { useEffect, useState } from 'react'
//FORM
import FormDash from '../../../../ui/FormDash'
import InputDash from '../../../../ui/FormDash/InputDash'
//BTNS
import SubmitBtn from '../../../../ui/Buttons/SubmitBtn'
// CONTEXT
import { useUser } from '../../../../context/userId'
//date 
import { getDate } from '../../../../utils/functions/getDate'

const SetData = ({ fetchData, setFetchData }) => {
    // CONTEXT
    const { userId } = useUser()

    const URL = import.meta.env.VITE_URL_SET_DASH

    //date
    const date = getDate()

    //input
    const [ actuallyValue, setActuallyValue ] = useState(0)
    const actuallyValueToNumber = +(actuallyValue)

    //gap
    const [gap, setGap] = useState(0)
    useEffect(() => {
        const latestValue = fetchData.map(elem => elem.actuallyValue).pop()
        if(latestValue !== undefined) {
            // value from input - latest value from DB
            const gapValue = actuallyValueToNumber - latestValue
            setGap(gapValue)
        }
    }, [actuallyValue])
    
    // amount
    const [amount, setAmount] = useState(0)
    useEffect(() => {
        const amountValue = (gap * 2.88).toFixed(2).padEnd(5, '0');
        setAmount(amountValue)
    }, [gap])
    
    //pay
    const [ pay ] = useState(false)

    async function sendData() {
        try {
            await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: date,
                actuallyValue: actuallyValueToNumber,
                gap: gap,
                amount: amount,
                pay: pay,
                author: userId
            })
            })
            .then(res => res.json())
            .then(data => {
                setFetchData([...fetchData, data]);
            })
        } catch (error) {
            console.error(error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        sendData() 
    }

    return (
        <div>
            <FormDash onSubmit={handleSubmit}>
                <InputDash
                    type="number"
                    id="statement"
                    label="Set statement"
                    onChange={(e) => setActuallyValue(e.target.value)}
                />
                <SubmitBtn label="add value"/>
            </FormDash>
        </div>
    )
}

export default SetData