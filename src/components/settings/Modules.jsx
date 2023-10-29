import styles from '../../pages/SettingsPage/Settings.module.scss'

function Modules() {

   return (
      <div className={styles.levelsBlock}>
         <p className={styles.blockTitle}>Уровни</p>
         <div className={styles.levels}>
            <ul className={styles.checkboxList}>
               <li><input type="checkbox" id='All' /><label htmlFor="All">All</label></li>
               <li><input type="checkbox" id='A11' /><label htmlFor="A11">A 1.1</label></li>
               <li><input type="checkbox" id='A12' /><label htmlFor="A12">A 1.2</label></li>
               <li><input type="checkbox" id='A21' /><label htmlFor="A21">A 2.1</label></li>
               <li><input type="checkbox" id='A22' /><label htmlFor="A22">A 2.2</label></li>
               <li><input type="checkbox" id='B11' /><label htmlFor="B11">B 1.1</label></li>
               <li><input type="checkbox" id='B12' /><label htmlFor="B12">B 1.2</label></li>
            </ul>
         </div>
      </div>
   )
}

export default Modules