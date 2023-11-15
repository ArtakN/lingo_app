import styles from './Lesson.module.scss'
import Card from '../../components/learn/Card'
import { useSelector, useDispatch } from 'react-redux'
import { setLearnWords } from '../../redux/slices/lessonSlice'

function Learn() {

   const allWords = useSelector((state) => state.words.allWords)
   const wordsCount = useSelector((state) => state.lessonSettings.wordsCount)
   const dispatch = useDispatch()

   dispatch(setLearnWords(allWords.slice(0, wordsCount)))

   return (
      <div className={styles.learn}>
         <div className={styles.container}>
            <Card />
         </div>
      </div >
   )
}

export default Learn