import styles from './Dashboard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchVocabulary } from '../../redux/slices/dashboardSlice';
import { useState, useMemo } from 'react';

function Dashboard() {

   const userId = useSelector(state => state.auth.currentUser.uid)
   const learnedWords = useSelector((state) => state.dashboard.learnedWords)
   const modules = useSelector((state) => state.words.modules)

   // Using useState to manage the state of activeModuleIndex and dropMenu
   const [activeModuleIndex, setActiveModuleIndex] = useState(0)
   const [dropMenu, setDropMenue] = useState(false)

   const dispatch = useDispatch()

   // Function to change the active module
   function changeActiveModule(index) {
      setActiveModuleIndex(index)
      setDropMenue(prevDropMenu => !prevDropMenu)
   }

   // useMemo hook to optimize performance
   const modulesList = useMemo(() => modules.map((module, index) =>
      module && <li
         key={module.name}
         onClick={() => changeActiveModule(index)}>
         {module.name}
      </li>
   ), [modules]) // modules is the dependency array

   // Getting the active module
   const activeModule = modules.length > 0 ? modules[activeModuleIndex].module : [];

   useEffect(() => {
      dispatch(fetchVocabulary(userId))
   }, [userId])

   const learnedWordsList = learnedWords.map(word => {
      return (<li key={word.id}>
         <span>{word.de}</span>
         <span>{word.ru}</span>
         <span>Learned</span>
      </li>)
   })

   return (
      <div className={styles.dashboard}>
         <div className={styles.container}>
            <div className={styles.learnedWordsInfo}>
               <p className={styles.learnedWords}>Learned words: {learnedWords.length}</p>
               <button className={styles.repeatBtn}>Repeat words</button>
            </div>
            <div className={styles.modules} onMouseLeave={() => setDropMenue(false)}>
               <label className={styles.activeModuleLabel}>Modules:</label>
               <div>
                  <div className={styles.activeModuleBlock} onClick={() => setDropMenue(prevDropMenu => !prevDropMenu)}>
                     <div className={styles.activeModule}>
                        {modules[activeModuleIndex] && modules[activeModuleIndex].name}

                     </div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M15.7599 4.21012L15.1814 3.63156C14.8624 3.31208 14.3438 3.31208 14.0241 3.63156L8.00746 9.57263L1.97526 3.5412C1.65562 3.22178 1.13735 3.22178 0.817983 3.5412L0.239529 4.11966C-0.0798429 4.43924 -0.0798429 4.95688 0.239529 5.27651L7.42161 12.4585C7.74098 12.7783 8.25884 12.7783 8.57857 12.4585L15.7599 5.36682C16.08 5.04739 16.08 4.52954 15.7599 4.21012Z" fill="black" />
                     </svg>
                  </div>
                  {dropMenu && <ul className={styles.modulesList} >
                     {modulesList}
                  </ul>}
               </div>
            </div>
            <ul className={styles.wordsList}>
               <li>
                  <span>Words</span>
                  <span>Translation</span>
                  <span>Staus</span>
               </li>
               {learnedWordsList}
            </ul>
         </div>
      </div>
   )
}

export default Dashboard