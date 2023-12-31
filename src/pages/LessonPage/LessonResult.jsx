import styles from './Lesson.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { updateVocabulary } from '../../redux/slices/lessonSlice'
import { useNavigate } from 'react-router-dom'

function LessonResult() {

   // Use selectors to get necessary state from the Redux store
   const wordsCount = useSelector((state) => state.lessonSettings.wordsCount) // Total number of words in the lesson
   const correctWords = useSelector((state) => state.lesson.correctWords) // Words that were correctly answered
   const incorrectWords = useSelector((state) => state.lesson.incorrectWords) // Words that were incorrectly answered
   const userId = useSelector(state => state.auth.currentUser.uid) // User ID of the current user

   const dispatch = useDispatch()
   const navigate = useNavigate()

   // Function to store the result of the lesson and navigate to the dashboard
   function storeLessonResult() {
      dispatch(updateVocabulary({ userId, correctWords })) // Update the vocabulary in the Redux store, adding correctly answered words
      navigate('/dashboard') // Navigate to the dashboard
   }

   return (
      <div className={styles.lessonResult}>
         <div className={styles.resultContainer}>
            <h1 className={styles.resultTitle}>Lesson result</h1>
            <div className={styles.resultParams}>
               <div>В уроке <span>{wordsCount}</span> слов</div>
               <div>Виучено: <span>{correctWords.length}</span> </div>
               <div>На повторение: <span>{incorrectWords.length}</span> </div>
            </div>
            <div className={styles.buttons}>
               <button className={`${styles.repeatBtn} ${styles.btn}`}>Repeat lesson</button>
               <button className={`${styles.saveResultBtn} ${styles.btn}`} onClick={storeLessonResult}>Save result</button>
            </div>
         </div>
      </div>
   )
}

export default LessonResult