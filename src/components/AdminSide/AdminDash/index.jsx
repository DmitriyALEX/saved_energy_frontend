import styles from './styles.module.css'
import TableUserMetrics from '../../../ui/Table/UserMetrics'
import SubNavigationBtn from '../../../ui/Buttons/SubNavigationBtn'

const AdminDash = ({setShowDash, dashData, checkedUsername}) => {
    return (
        <>
            <section className={styles.nav_container}>
                <div >
                    <em className={styles.nav_container_note}>USERNAME: &nbsp; </em>
                    <strong className={styles.nav_container_title}>
                        {checkedUsername}
                    </strong>
                </div>
                <SubNavigationBtn
                    label="↯ Return"
                    onClick={() => setShowDash(false)}
                />
            </section>
            
            <TableUserMetrics 
                fetchData={dashData}
                setFetchData={setShowDash}
            />
        </>
    )
}

export default AdminDash