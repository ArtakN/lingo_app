import { useEffect } from 'react'
import styles from '../../pages/SettingsPage/Settings.module.scss'

function Exercises({ exerciseTypes, setExerciseTypes, fetchedExerciseTypes }) {

   // first the component gets inital state from RTK store, this makes the component rerenders as soon as the RTK store updates with feetched data. 
   useEffect(() => {
      setExerciseTypes(fetchedExerciseTypes)
   }, [fetchedExerciseTypes])

   // on checkboxes change it sets new settings to local state
   const handleTypesChange = (event) => {
      setExerciseTypes({ ...exerciseTypes, [event.target.name]: event.target.checked })
   }

   return (
      <div className={styles.exerciseBlock}>
         <p className={styles.blockTitle}>Упражнение</p>
         <div className={styles.exercise}>
            <ul className={styles.checkboxList}>
               <li>
                  <input
                     id='card'
                     type="checkbox"
                     name='choose'
                     checked={exerciseTypes.choose}
                     onChange={handleTypesChange}
                     disabled
                  />
                  <label htmlFor="card">Выбирать вариант</label>
               </li>
               <li>
                  <input
                     id='voice'
                     type="checkbox"
                     name='listen'
                     checked={exerciseTypes.listen}
                     onChange={handleTypesChange}
                     disabled
                  />
                  <label htmlFor="voice" >Слушать</label>
               </li>
               <li>
                  <input
                     id='write'
                     type="checkbox"
                     name='write'
                     checked={exerciseTypes.write}
                     onChange={handleTypesChange}
                     disabled
                  />
                  <label htmlFor="write" disabled>Написать</label>
               </li>
               <li>
                  <input
                     id='speak'
                     type="checkbox"
                     name='speak'
                     checked={exerciseTypes.speak}
                     onChange={handleTypesChange}
                     disabled
                  />
                  <label htmlFor="speak" disabled>Говорить</label>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Exercises