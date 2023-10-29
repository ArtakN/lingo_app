import styles from './LearnWords.module.scss'
import Card from '../../components/learn/Card'
import { useSelector, useDispatch } from 'react-redux'
import { setLearnWords } from '../../redux/slices/learnSlice'

function LearnWords() {

   const allWords = useSelector((state) => state.words.allWords)
   const wordsCount = useSelector((state) => state.settings.wordsCount)
   const dispatch = useDispatch()

   dispatch(setLearnWords(allWords.slice(0, wordsCount)))

   return (
      <div className={styles.learn}>
         <div className={styles.container}></div>
         <Card />
      </div >
   )
}

export default LearnWords