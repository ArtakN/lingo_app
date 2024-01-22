import { useEffect } from 'react'
import styles from '../../pages/SettingsPage/Settings.module.scss'

function Modules({ modules, setModules, fetchedModules }) {

   // first the component gets inital state from RTK store, this makes the component rerenders as soon as the RTK store updates with feetched data. 
   useEffect(() => {
      setModules(fetchedModules)
   }, [fetchedModules])

   // on checkboxes change it sets new settings to local state
   const handleModulesChange = (event) => {
      // on 'All' checkbox click all the cechboxes state changes 
      if (event.target.name === 'All') {
         setModules({
            All: event.target.checked,
            A1: event.target.checked,
            A2: event.target.checked,
            B1: event.target.checked,
            B2: event.target.checked
         })
         // on specific checkbox click only the checkbox state changes
      } else {
         setModules({ ...modules, [event.target.name]: event.target.checked })
      }
   }

   return (
      <div className={styles.levelsBlock}>
         <p className={styles.blockTitle}>Модулы</p>
         <div className={styles.levels}>
            <ul className={styles.checkboxList}>
               <li>
                  <input
                     type="checkbox"
                     id='All'
                     name='All'
                     checked={modules.Al}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="All" >All</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A1'
                     name='A1'
                     checked={modules.A1}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A1" >A 1</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A2'
                     name='A2'
                     checked={modules.A2}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A2" >A 2</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='B1'
                     name='B1'
                     checked={modules.B1}
                     onChange={handleModulesChange}
                  /><label htmlFor="B1" >B 1</label>
               </li>
               <li><input
                  type="checkbox"
                  id='B2'
                  name='B2'
                  checked={modules.B2}
                  onChange={handleModulesChange}
               />
                  <label htmlFor="B2" >B 2</label>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Modules