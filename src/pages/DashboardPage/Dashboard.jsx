import styles from './Dashboard.module.scss'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Dashboard() {

   const [learnedWords, setLearnedWords] = useState([])
   const [wordsToRepeat, setWordsToRepeat] = useState([])
   const [selectedTab, setSelectedTab] = useState('learned')

   const userId = useSelector(state => state.user.currentUser.uid)



   useEffect(() => {
      const fetchData = async () => {
         try {
            const docRef = doc(db, "vocabulary", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
               setLearnedWords(docSnap.data().learnedWords)
               setWordsToRepeat(docSnap.data().wordsToRepeat)
            } else {
               console.log("No such document!");
            }
         } catch (error) {
            console.log(error)
         }
      }
      fetchData()
   }, [])

   const learnedWordsList = learnedWords.map(word => {
      return <li key={word}>{word}</li>
   })

   const wordsToRepeatList = wordsToRepeat.map(word => {
      return <li key={word}>{word}</li>
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