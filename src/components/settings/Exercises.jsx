import styles from '../../pages/SettingsPage/Settings.module.scss'

function Exercises() {
   return (
      <div className={styles.exerciseBlock}>
         <p className={styles.blockTitle}>Упражнение</p>
         <div className={styles.exercise}>
            <ul className={styles.checkboxList}>
               <li><input id='card' type="checkbox" /><label htmlFor="card">Выбирать вариант</label></li>
               <li><input id='voice' type="checkbox" /><label htmlFor="voice">Прослушивать</label></li>
               <li><input id='write' type="checkbox" /><label htmlFor="write">Написать слово</label></li>
            </ul>
         </div>
      </div>
   )
}

export default Exercises