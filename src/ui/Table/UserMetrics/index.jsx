import styles from '../styles.module.css'
import SubNavigationBtn from '../../Buttons/SubNavigationBtn'
//ICONS
import check_false from '/icons/check_false.png'
import check_true from '/icons/check_true.png'
// CONTEXT 
import { useUser } from '../../../context/userId'

const TableUserMetrics = ({ fetchData, setFetchData}) => {

    // CONTEXT
    const { userId } = useUser()

    const adm = import.meta.env.VITE_URL_ADM

    // TABLE HEADERS
    const TableHeaders = ['/', 'Date', 'Actually Value', 'Gap', 'Amount', 'Payment']
    
    //checkpay
    const handlePayment = (tableId) => {
        fetchData.map(fetchId => {
            if(fetchId._id === tableId) {
                const updatedStatus = fetchId.pay = true
                togglePaymentStatus(updatedStatus, tableId)
            }
        })
    }

    //toggle payment status
    function togglePaymentStatus(updatedStatus, tableId) {
        try {
            const URL = import.meta.env.VITE_URL_PAY_DASH.replace(':postId', tableId)
            fetch(URL, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pay: updatedStatus })
            })
            .then(res => res.json())
            .then(data => setFetchData([...fetchData], data))
       } catch(e) {
        console.log(e)
       }
    }

    return (
        <>
            <table className={styles.table}>
                {/* HEAD */}
                <thead className={styles.table_head}>
                    <tr className={styles.table_head_rows}>
                        {TableHeaders.map((header, idx) => (
                            <th 
                                className={styles.table_head_cell}
                                key={idx}
                            >{header}
                            </th>
                        ))}
                    </tr>
                </thead>
                {/* BODY */}
                <tbody className={styles.table_body}>
                    {fetchData.map((value, idx) => (
                        <tr 
                            className={idx % 2 === 0 
                                ? styles.table_body_rows_even
                                : styles.table_body_rows_row
                            }
                            key={value._id}
                        >
                            <td className={styles.table_body_cell}>{idx + 1}</td>
                            <td className={styles.table_body_cell}>{value.date}</td>
                            <td className={styles.table_body_cell}>{value.actuallyValue}</td>
                            <td className={styles.table_body_cell}>
                                {value.gap === 0 ? '-' : value.gap}</td>
                            <td className={styles.table_body_cell}>
                                {value.amount === 0 ? '-' : value.amount}</td>
                            <td className={styles.table_body_cell}>
                                {userId !== adm && value.pay !== true && value.amount !== 0 
                                    ?   <SubNavigationBtn
                                        onClick={() => handlePayment(value._id)}
                                        label="pay"
                                        /> 
                                    : userId === adm && value.pay !== true && value.amount !== 0 
                                    ? <img src={check_false} style={{width: "15px", height: "15px"}}/> 
                                    : <img src={check_true} style={{width: "30px", height: "30px"}}/> 
                                }
                            </td>
                        </tr>
                    ))}    
                </tbody>
            </table>
        </>
    )
}

export default TableUserMetrics