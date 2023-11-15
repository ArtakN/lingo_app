import styles from './AdminPanel.module.scss'
import { allWords, modules } from '../../data';
import { db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { fetchWords } from '../../redux/slices/wordsSlice';
import { useDispatch, useSelector } from 'react-redux';

function AdminPanel() {

   const dbModules = modules.filter(module => {
      return module.module !== allWords
   })

   const addWordsToDb = () => {
      // Loop through each module
      dbModules.forEach((module) => {
         // Create a document for the module
         const docRef = doc(db, 'words', module.name);

         // Add the words to the document
         module.module.forEach((word) => {
            // Add the word to Firestore as a field in the document
            setDoc(docRef, { [word.id]: word }, { merge: true });
         });
      });
   }

   const dispatch = useDispatch()


   const showFetchedWords = () => {
      dispatch(fetchWords())
   }

   useSelector(state => {
      console.log(state.words.allWords)
      console.log(state.words.modules)
   })

   return (
      <div className={styles.adminPanel}>
         <div className={styles.container}>
            <div className={styles.addWordContainer}>
               <p className={styles.addWordTitle}>Add a word</p>
               <div className={styles.addWordInputs}>
                  <input type="text" placeholder='Article' />
                  <input type="text" placeholder='Word' />
                  <input type="text" placeholder='Translation' />
               </div>
               <button className={styles.addWordButton} onClick={showFetchedWords}>Add</button>
            </div>
            <div className={styles.addAllWords}>
               <button className={styles.addToDb} onClick={addWordsToDb}>Add all words to db</button>
            </div>
         </div>
      </div>
   )
}

export default AdminPanel