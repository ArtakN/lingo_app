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
            A11: event.target.checked,
            A12: event.target.checked,
            A21: event.target.checked,
            A22: event.target.checked,
            B11: event.target.checked,
            B12: event.target.checked
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
                     checked={modules.All}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="All" >All</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A11'
                     name='A11'
                     checked={modules.A11}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A11" >A 1.1</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A12'
                     name='A12'
                     checked={modules.A12}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A12" >A 1.2</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A21'
                     name='A21'
                     checked={modules.A21}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A21" >A 2.1</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='A22'
                     name='A22'
                     checked={modules.A22}
                     onChange={handleModulesChange}
                  />
                  <label htmlFor="A22" >A 2.2</label>
               </li>
               <li>
                  <input
                     type="checkbox"
                     id='B11'
                     name='B11'
                     checked={modules.B11}
                     onChange={handleModulesChange}
                  /><label htmlFor="B11" >B 1.1</label>
               </li>
               <li><input
                  type="checkbox"
                  id='B12'
                  name='B12'
                  checked={modules.B12}
                  onChange={handleModulesChange}
               />
                  <label htmlFor="B12" >B 1.2</label>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Modules