import styles from './Dashboard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchVocabulary } from '../../redux/slices/dashboardSlice';

function Dashboard() {

   const userId = useSelector(state => state.user.currentUser.uid)
   const learnedWords = useSelector((state) => state.dashboard.learnedWords)

   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(fetchVocabulary(userId))
   }, [userId])

   const learnedWordsList = learnedWords.map(word => {
      return <li key={word.id}>{word.de}</li>
   })

   return (
      <div className={styles.dashboard}>
         <div className={styles.container}>
            <div className={styles.learnedWordsBlock}>
               <p className={styles.learnedWords}>Выученые слова: {learnedWords.length}</p>
               <button className={styles.repeatBtn}>Повторить слова</button>
            </div>
            <ul className={styles.wordsList}>
               {learnedWordsList}
            </ul>
         </div>
      </div>
   )
}

export default Dashboard