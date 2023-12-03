// Importing necessary modules and hooks
import styles from './Lesson.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Defining the LessonParameters component
function LessonParameters() {

   // Using Redux to get the state of lessonSettings
   const lessonParameters = useSelector(state => state.lessonSettings)

   // Checking if any module is selected
   const isModuleSelected = Object.values(lessonParameters.modules).some(value => value);

   return (
      <div className={styles.lessonParameters}>
         <div className={styles.paramsContainer}>
            <h1 className={styles.paramsTitle}>Lesson parameters</h1>
            <div className={styles.parameters}>

               <div className={styles.wordsCount}>
                  <span>Words in the lesson: </span>
                  {lessonParameters.wordsCount}
               </div>

               <div className={styles.modules}>
                  <span>Modules:</span>
                  {
                     // Filtering, sorting and reducing the modules to a string
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
                        }, []).join(' | ') || <span className={styles.noModuleSelected}> No module selected</span>
                  }
               </div>

               <div className={styles.exercises}>
                  <span>Exercises:</span>
                  <ul className={styles.exerciseTypes}>
                     {
                        // Mapping over the exerciseTypes to create a list of exercises
                        Object.entries(lessonParameters.exerciseTypes).map(([key, value]) => {
                           if (value) {
                              let exerciseName;
                              switch (key) {
                                 case 'choose':
                                    exerciseName = 'Сhoose an option';
                                    break;
                                 case 'listen':
                                    exerciseName = 'Hear';
                                    break;
                                 case 'write':
                                    exerciseName = 'Write';
                                    break;
                                 case 'speak':
                                    exerciseName = 'Speak';
                                    break;
                                 default:
                                    exerciseName = '';
                              }
                              return <li key={value}>{exerciseName}</li>;
                           }
                           return null;
                        })
                     }
                  </ul>
               </div>

            </div>
            <div className={styles.buttons}>
               <Link to='/settings' className={`${styles.settingsBtn} ${styles.btn}`}>Edit lesson</Link>
               {isModuleSelected
                  ? (
                     // If a module is selected, allow the user to start the lesson
                     <Link to='/lesson/learn' className={`${styles.startBtn} ${styles.btn}`}>Start lesson</Link>
                  ) : (
                     // If no module is selected, disable the start lesson button
                     <button className={styles.disabledBtn} disabled>Start lesson</button>
                  )}
            </div>
         </div>
      </div>
   )
}

// Exporting the LessonParameters component
export default LessonParameters
