/*
   Conditional rendering
      -&&
      -ternary operator
      -if...else
      -returning nothing with null
*/

//==============================================================================
/* Conditional rendring - to render some code depending on a condition
   95% of condition rendering is handeled either && or a ternary operator  */

// && is used, if we want somthing display or not display 

// -----------------------------------------------------------------------------

const [isGointOut, setIsGoingOut] = useState(true)

// with ternary operate we flipp true to false then false to true
function changeMind() {
   setIsGoingOut(prevState => prevState ? false : true)
}

// we can short it - just turn the opposite
function changeMind() {
   setIsGoingOut(prevState => !prevState)
}

// -----------------------------------------------------------------------------

function Joke(props) {
   const [isShown, setIsShown] = React.useState(false)

   {/* when click the "Show Punchline" button bellow toggle "prevShown"    
      ("isShown") from true to false and back or forth   */ }
   function toggleShown() {
      setIsShown(prevShown => !prevShown)
   }
   return (
      <div>

         {/*   here we say: if "isShown" is true then go further and show  
               "<p>{props.punchline}</p>". If isShown is false it will stop, 
               if true will go furter, and no mater what 2nd part is, true or false, any way it will be processed. if there where a third pard, and second pard was false, it would stop on the second pard */}
         {isShown && <p>{props.punchline}</p>}

         {/* in the first part we can use ===, !==, >, < ... */}

         <button onClick={toggleShown}>Show Punchline</button>
         <hr />
      </div>
   )
}

//------------------------------------------------------------------------------
/* Don’t put numbers on the left side of &&.

   To test the condition, JavaScript converts the left side to a boolean automatically. 
   However, if the left side is 0, then the whole expression gets 0, and React will happily render 0 rather than nothing.

   For example, a common mistake is to write code like 
   messageCount && <p>New messages</p>. 
   It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

   To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.   */
//==============================================================================

//==============================================================================
// Ternary operator is used, if we want to choose between first or second thing to display

function Joke(props) {
   const [isShown, setIsShown] = React.useState(false)
   function toggleShown() {
      setIsShown(prevShown => !prevShown)
   }
   return (
      <div>
         {/* if props.setup is true we will render h3 element */}
         {props.setup && <h3>{props.setup}</h3>}
         {isShown && <p>{props.punchline}</p>}
         {/* we reander the button depending on canditon, if isShown is true we will show on button "Hide Punchline" text, if isShown is false, there will be "Show Punchline" */}
         <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
         <hr />
      </div>
   )
}

//------------------------------------------------------------------------------
// we will render 

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
         {/* when we click on any item of the list, it will check if this item index (the list itemes are sorts array items, so they have index )
         id equal to the state value */}
         {sorts.map((sort, index) => <li key={sort} onClick={() => { setSelectedSort(index) }} className={selectedSort === index ? styles.selected : ''}>{sort}</li>)}
      </ul>
   )
}
//==============================================================================

//==============================================================================
/* If our conditions are more complex than just having one or two options,
   it will be better to use regular if else statement
         if () {

         } else {

         }     
         
   *** but if-else statement will not work here, beacause it is a block statement, we cant short it to one line. We can use ternary operator with several conditions: 
      
         condition_1 ? value_1 : condition_2 ? value_2 : value_3    */

export default function Main() {
   const [selectedSort, setSelectedSort] = useState(0)

   return (
      <div className={styles.sort}>
         {if (){
            // we get error
         } else {

         }}
      </div>
   )
}
//==============================================================================

//==============================================================================
// Conditionally returning nothing with null

/* In some situations, you won’t want to render anything at all. For example, 
   say you don’t want to show packed items at all. A component must return something. In this case, you can return null: */

function Item({ name, isPacked }) {
   if (isPacked) {
      return null;
   }
   return <li className="item">{name}</li>;
}
/* In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX using &&/ternary operators/if-else */
import auth from './Login.jsx'

function App() {
   <Home />
   auth && <Dashboard />  // we include <Dashboard /> component if user loged in
}
//==============================================================================

//==============================================================================
// Quiz

/* 1. What is "conditional rendering"?

         When we want to only sometimes display something on the page
         based on a condition of some sort

   2. When would you use &&?

         When you want to either display something or NOT display it

   3. When would you use a ternary?

         When you need to decide which thing among 2 options to display

   4. What if you need to decide between > 2 options on what to display?

         Use an `if...else` conditional or a `switch case` statement   */
//==============================================================================