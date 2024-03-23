import styles from './styles.module.css'
import SubNavigationBtn from '../../../ui/Buttons/SubNavigationBtn'
import Saved from '../../../ui/Saved'

const AdminSaved = ({setShowSaved, savedData, checkedUsername}) => {
    return (
        <>
           <section className={styles.nav_container}>
                <span style={{marginLeft: '8px'}}>
                    <em className={styles.nav_container_note}>USERNAME: &nbsp;</em>
                    <strong className={styles.nav_container_title}>
                        {checkedUsername}
                    </strong>
                </span>
                <div style={{marginRight: '8px'}}>
                    <SubNavigationBtn
                        label="↯ Return"
                        onClick={() => setShowSaved(false)} 
                    />
                </div>
            </section>
            <div>
                <Saved savedData={savedData} />
            </div>
        </>
    )
}

export default AdminSaved