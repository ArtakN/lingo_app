/*
   dynamic styles
   active item of a list
*/

//==============================================================================
// Dynemic styles

/* however because React is JS, we can change the style dynamically depending
   on, for example, the value of our state or the value of incoming props     */

function Box(props) {   // let imagine here in props we get darkmode = true

   // here we crate a style object
   const styles = {
      // background color will change depending on props.darkmode
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"
   }

   const squareElements = squares.map(square => (
      // we will change background color of this element
      <div style={styles} key={square.id}></div>
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}
//==============================================================================

//==============================================================================
// we will change list items style dinamicly

/* we created Main.module.scss file and creted a styles for selected item

      .selected {
         background-color: rgba(161, 0, 237, 1);
         border: 1px solid rgba(161, 0, 237, 1);
      }
*/

import { useState } from 'react'
import styles from './Main.module.scss'

const sorts = ['Top', 'Popullar', 'Recommended', 'Discont']

export default function Main() {
   const [selectedSort, setSelectedSort] = useState(0)

   return (
      <ul className={styles.sort}>
         {/* when we click on any item of the list, it will get selected styles:
            on click the list item we change state to the index number of the clicked item (item index we get from map method), then we check if the state is equal to the index, if it is so its style will be set as selected (from all of the items only clicked/active items index is equal to the state, so we will change active index style). */}
         {sorts.map((sort, index) => <li key={sort} onClick={() => { setSelectedSort(index) }} className={selectedSort === index ? styles.selected : ''}>{sort}</li>)}
      </ul>
      // we check if state is equal to index,
   )
}
//==============================================================================