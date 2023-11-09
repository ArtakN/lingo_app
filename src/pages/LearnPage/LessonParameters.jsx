import styles from './LearnWords.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function LessonParameters() {

   const lessonParameters = useSelector(state => state.lessonSettings)

   const isModuleSelected = Object.values(lessonParameters.modules).some(value => value);

   return (
      <div className={styles.lessonParameters}>
         <div className={styles.paramsContainer}>
            <h1 className={styles.paramsTitle}>Параметры урока</h1>
            <div className={styles.parameters}>

               <div className={styles.wordsCount}>
                  <span>Количества слов в уроке: </span>
                  {lessonParameters.wordsCount}
               </div>

               <div className={styles.modules}>
                  <span>Модули:</span>
                  {
                     Object.entries(lessonParameters.modules)
                        .filter(([key]) => key !== 'All') // Skip the 'All' property
                        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Sort the keys in lexicographic order
                        .reduce((acc, [key, value], index, array) => {
                           if (value) {
                              // Convert the key to the desired format (e.g., 'A11' becomes 'A 1.1')
                              const formattedKey = ' ' + key[0] + ' ' + key[1] + '.' + key[2];
                              acc.push(formattedKey);
                           }
                           return acc;
                        }, []).join(' | ') || <span className={styles.noModuleSelected}> Не выбран модуль</span>
                  }
               </div>


               <div className={styles.exercises}>
                  <span>Упражнения:</span>
                  <ul className={styles.exerciseTypes}>
                     {
                        Object.entries(lessonParameters.exerciseTypes).map(([key, value]) => {
                           if (value) {
                              let exerciseName;
                              switch (key) {
                                 case 'choose':
                                    exerciseName = 'Выбирать вариант';
                                    break;
                                 case 'listen':
                                    exerciseName = 'Слушать';
                                    break;
                                 case 'write':
                                    exerciseName = 'Написать';
                                    break;
                                 case 'speak':
                                    exerciseName = 'Говорить';
                                    break;
                                 default:
                                    exerciseName = '';
                              }
                              return <li key={key}>{exerciseName}</li>;
                           }
                           return null;
                        })
                     }
                  </ul>
               </div>

            </div>
            <div className={styles.buttons}>
               <Link to='/settings' className={`${styles.settingsBtn} ${styles.btn}`}>Настроить урок</Link>
               {isModuleSelected
                  ? (
                     <Link to='/words/learn' className={`${styles.startBtn} ${styles.btn}`}>Начать урок</Link>
                  ) : (
                     <button className={styles.disabledBtn} disabled>Начать урок</button>
                  )}
            </div>
         </div>
      </div>
   )
}

export default LessonParameters