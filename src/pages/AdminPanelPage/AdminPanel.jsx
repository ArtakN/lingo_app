// Importing necessary modules and data
import styles from './AdminPanel.module.scss'
import { allWords, modules } from '../../data';
import { db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { fetchWords } from '../../redux/slices/wordsSlice';
import { useDispatch, useSelector } from 'react-redux';

function AdminPanel() {

   // Filtering out All (allWords) from modules. We don't need to create All module in db so we need to filter it out.
   const dbModules = modules.filter(module => {
      return module.module !== allWords
   })

   // Function to add words to Firestore
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

   // Function to dispatch fetchWords action
   const showFetchedWords = () => {
      dispatch(fetchWords())
   }

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
               <p>All words from data.js will be setted to the firebase Words collection.</p>
               <div>
                  <button className={styles.addToDb} onClick={addWordsToDb}>Add all words to db</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdminPanel