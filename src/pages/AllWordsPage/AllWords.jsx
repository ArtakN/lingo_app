import styles from './AllWords.module.scss'
import Loading from '../../components/Loading/Loading'
import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AllWords() {
   // Using Redux to get the state of words and modules
   const modules = useSelector((state) => state.words.modules)
   const loading = useSelector((state) => state.words.loading);
   const error = useSelector((state) => state.words.error);

   // Using useState to manage the state of activeModuleIndex and dropMenu
   const [activeModuleIndex, setActiveModuleIndex] = useState(0)
   const [dropMenu, setDropMenue] = useState(false)

   // Function to change the active module
   function changeActiveModule(index) {
      setActiveModuleIndex(index)
      setDropMenue(prevDropMenu => !prevDropMenu)
   }
   console.log(modules)
   // useMemo hook to optimize performance
   const modulesList = useMemo(() => modules.map((module, index) =>
      module && <li
         key={module.name}
         onClick={() => changeActiveModule(index)}>
         {module.name}
      </li>
   ), [modules])

   // Getting the active module
   const activeModule = modules.length > 0 ? modules[activeModuleIndex].moduleWords : [];

   // Mapping over the active module to create a list of words
   const wordsList = activeModule ? Object.entries(activeModule).map(([key, value]) =>
      <li key={key}>
         <span>{`${value.article} ${value.de}`}</span>
         <span>{value.ru}</span>
         <span>Учить</span>
      </li>
   ) : [];

   return (
      loading ? <Loading /> :
         (
            <div className={styles.words}>
               <div className={styles.container}>
                  <div className={styles.wordsInfo}>
                     <div className={styles.wordsCount}>Слова в модуле: {wordsList.length}</div>
                     <Link to='/lesson/parameters' className={styles.learnBtn}>Учить слова</Link>
                  </div>
                  <div className={styles.modules} onMouseLeave={() => setDropMenue(false)}>
                     <label className={styles.activeModuleLabel}>Модули:</label>
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
                        <span>Слово</span>
                        <span>Перевод</span>
                        <span>Статус</span>
                     </li>
                     {wordsList}
                  </ul>
               </div>
            </div>
         )
   )
}

export default AllWords
