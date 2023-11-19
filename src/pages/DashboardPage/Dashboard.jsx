import styles from './Dashboard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchVocabulary } from '../../redux/slices/dashboardSlice';

function Dashboard() {

   const [selectedTab, setSelectedTab] = useState('learned')
   const userId = useSelector(state => state.user.currentUser.uid)
   const learnedWords = useSelector((state) => state.dashboard.learnedWords)
   const wordsToRepeat = useSelector((state) => state.dashboard.wordsToRepeat)

   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(fetchVocabulary(userId))
   }, [userId])

   const learnedWordsList = learnedWords.map(word => {
      return <li key={word.id}>{word.de}</li>
   })

   const wordsToRepeatList = wordsToRepeat.map(word => {
      return <li key={word.id}>{word.de}</li>
   })

   return (
      <div className={styles.dashboard}>
         <div className={styles.container}>
            <div className={styles.tabs}>
               <button className={`${styles.tabBtn} ${selectedTab === 'learned' && styles.active} `} type='button' onClick={() => setSelectedTab('learned')}>Выученые слова</button>
               <button className={`${styles.tabBtn} ${selectedTab === 'repeat' && styles.active}`} type='button' onClick={() => setSelectedTab('repeat')}>Слова на повторения</button>
            </div>
            {selectedTab === 'learned' ? (
               <div className={styles.activeTab}>
                  <p className={styles.tabInfo}>Выученые слова: {learnedWords.length}</p>
                  <ul className={styles.wordsList}>
                     {learnedWordsList}
                  </ul>
               </div>
            ) : (
               <div className={styles.activeTab}>
                  <p className={styles.tabInfo}>Слова на повторение: {wordsToRepeat.length}</p>
                  <ul className={styles.wordsList}>
                     {wordsToRepeatList}
                  </ul>
               </div>
            )}
         </div>
      </div >
   )
}

export default Dashboard