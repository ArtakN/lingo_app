import styles from './Lesson.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setLessonWords } from '../../redux/slices/lessonSlice'
import WordCard from '../../components/learn/WordCard'

function Learn() {

   const allWords = useSelector((state) => state.words.allWords)
   const wordsCount = useSelector((state) => state.lessonSettings.wordsCount)
   const learnedWords = useSelector((state) => state.dashboard.learnedWords)

   const dispatch = useDispatch()

   // Filtering out the words that the user has already learned
   const newWords = allWords.filter(word => !learnedWords.includes(word))

   // Dispatching an action to set the words for the lesson
   dispatch(setLessonWords(newWords.slice(0, wordsCount)))

   return (
      <div className={styles.learn}>
         <div className={styles.container}>
            <WordCard />
         </div>
      </div >
   )
}

export default Learn