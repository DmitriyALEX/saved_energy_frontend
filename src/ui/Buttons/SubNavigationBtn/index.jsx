import styles from './styles.module.css'

const SubNavigationBtn = ({label, onClick}) => {
 return (
    <button 
      onClick={onClick}
      className={styles.subnavigation}
    >{label}</button>
 )
} 

export default SubNavigationBtn