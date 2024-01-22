import styles from './Lesson.module.scss'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVocabulary } from '../../redux/slices/dashboardSlice'
import { setLessonWords } from '../../redux/slices/lessonSlice'
import { useEffect } from 'react'

function LessonParameters() {

   const lessonParameters = useSelector(state => state.lessonSettings)
   const loading = useSelector(state => state.lessonSettings.loading)
   const userId = useSelector(state => state.auth.currentUser.uid)
   const modules = useSelector(state => state.words.modules)
   const learnedWords = useSelector((state) => state.dashboard.learnedWords)

   const dispatch = useDispatch()

   // Checking if any module is selected
   const isModuleSelected = Object.values(lessonParameters.modules).some(value => value);

   // Fetching vocabulary (learned words) - to keep up to date vocabulary words
   useEffect(() => {
      dispatch(fetchVocabulary(userId))
   }, [])

   // Filtering the selected modules
   const checkedModules = Object.entries(lessonParameters.modules).filter(([key, value]) => value && key !== 'All').map(([key, value]) => key);

   const checkedWords = []

   // Looping through the selected modules and the modules to find matching ones
   for (let i = 0; i < checkedModules.length; i++) {
      for (let j = 0; j < modules.length; j++) {
         if (modules[j].name === checkedModules[i]) {
            let worsArray = Object.values(modules[j].moduleWords)
            checkedWords.push(...worsArray);
         }
      }
   }

   // Filtering out the words that the user has already learned
   const newWords = checkedWords.filter(checkedWord =>
      !learnedWords.some(learnedWord => learnedWord.de === checkedWord.de)
   );

   const lessonWords = []

   // Randomly selecting words for the lesson
   for (let i = 0; i < lessonParameters.wordsCount; i++) {
      if (newWords.length === 0) {
         break;
      }
      const randomIndex = Math.floor(Math.random() * newWords.length)
      lessonWords.push(newWords[randomIndex])
      newWords.splice(randomIndex, 1)
   }

   // Dispatching an action to set the words for the lesson
   function handleClick() {
      dispatch(setLessonWords(lessonWords))
   }

   return (
      loading ? <Loading /> : (
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
                                 // Convert the key to the desired format (e.g., 'A1' becomes 'A 1')
                                 const formattedKey = ' ' + key[0] + ' ' + key.slice(1);
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
                        <Link to='/lesson/learn' className={`${styles.startBtn} ${styles.btn}`} onClick={() => handleClick()}>Start lesson</Link>
                     ) : (
                        // If no module is selected, disable the start lesson button
                        <button className={styles.disabledBtn} disabled>Start lesson</button>
                     )}
               </div>
            </div>
         </div >
      )
   )
}

// Exporting the LessonParameters component
export default LessonParameters
