import styles from './Lesson.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { updateVocabulary } from '../../redux/slices/lessonSlice'

function LessonResult() {

   const wordsCount = useSelector((state) => state.lessonSettings.wordsCount)
   const correctWords = useSelector((state) => state.lesson.correctWords)
   const incorrectWords = useSelector((state) => state.lesson.incorrectWords)
   const userId = useSelector((state) => state.user.currentUser.uid)

   const dispatch = useDispatch()

   function handleLessonWords() {
      dispatch(updateVocabulary({ userId, correctWords, incorrectWords }))
      console.log(userId, correctWords, incorrectWords)
   }

   return (
      <div className={styles.lessonResult}>
         <div className={styles.resultContainer}>
            <h1 className={styles.resultTitle}>Резултаты урока</h1>
            <div className={styles.resultParams}>
               <div>В уроке <span>{wordsCount}</span> слов</div>
               <div>Виучено: <span>{correctWords.length}</span> </div>
               <div>На повторение: <span>{incorrectWords.length}</span> </div>
            </div>
            <div className={styles.resultButtons}>
               <button className={`${styles.repeatBtn} ${styles.btn}`}>Повторить урок</button>
               <button className={`${styles.saveResultBtn} ${styles.btn}`} onClick={handleLessonWords}>Сохранить резултат</button>
            </div>
         </div>
      </div>
   )
}

export default LessonResult