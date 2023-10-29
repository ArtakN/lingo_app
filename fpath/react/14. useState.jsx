// =============================================================================
// useState

/* In React, useState, as well as any other function starting with ”use”, is 
   called a Hook. Hooks are special functions that are only available while React is rendering. Hooks—functions starting with use, they can only be called at the top level of components or own Hooks. 
   We can’t call Hooks inside conditions, loops, or other nested functions. */

// before using useState we need to import it
import React from "react"

function App() {
   // we declerite some state in the component by calling React.useState()
   const [state, functionName] = React.useState("state inital value")

   return (
   )
}

// -----------------------------------------------------------------------------

// or we can determine useState in import
import React, { useState } from "react"

function App() {
   // and use useState in the component without "React".
   const [state, functionName] = useState("state inital value")

   return (
   )
}
// we will ues this type of syntex

// -----------------------------------------------------------------------------

// The first element

// If we log useState
let result = useState()

console.log(result)
// we will get an array  -  [undefined, f()]

// if we give some value to the useState: 
let result1 = useState("Hello")

console.log(result1)
// we will get this array  -  ["Hello", f()]

// -----------------------------------------------------------------------------

/* useState array destructuring

   as we saw useState returns an array with 2 elements 
      -the first element includes some data  -  state
      -the second element is a function   -  to change the state - state setter function 
      -and value in useState() is initial value of the state     */
const [isImportant, func] = React.useState("Yes")

console.log(isImportant) // we will get ["Yes", f()]

// -----------------------------------------------------------------------------

// Changing state

// As we know in JS we can at first declare a variable then change it
let isImportant = "Yes"
isImportant = "No"


// but in state we can't change it like that
const [state, func] = React.useState("Yes")  // state = "Yes"
state = "No"   // NOOO: the state will not be changed


// instead it, there is a function (func) that allows us to change the state
const [state, func] = React.useState("Yes")
func("No") // it is not a goot exaple, it is only to understand how it works


/* usually we set or change the state whenever something specifing happend 
   in the page for example button click   */
import { useState } from "react"

function App() {
   const [isImportant, setIsImportant] = useState("Yes")

   // this is the correct way how we can change the state
   function handleClick() {
      setIsImportant("No")
   }

   return (
      <div className="state">
         <h1>{isImportant}</h1>
         {/*  on "Chnange" button click it will call the handleClick() function 
               which will invoke the state setter function setIsImportant() 
               and it will change the state from "Yes" to "No".  */}
         <button className="state--value" onClick={handleClick}>Change</button>
      </div>
   )
}

// ----------------------------------------------------------------------------

// Changing state with a callback function
function App() {

   // here we set useState, and set initial value for count = 0
   const [count, setCount] = useState(0)

   function add() {
      /* 2. as soon as the add() function will be invoked, 
            it will invoke the setCount() function, 
            which will change the state */
      setCount(count + 1)
   }

   return (
      <div className="counter">
         {/* 1. on "+" button click add() function  will be invoked  */}
         <button className="counter--plus" onClick={add}>+</button>
         <div className="counter--count">
            <h1>{count}</h1>
         </div>
      </div>
   )
}

// But there is one problem here

/*******************************************************************************
   If we need the old value of state to help to determine the new value of state, we should pass a callback function to the state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which we wil use to determine our new value of state.
 ******************************************************************************/

function App() {
   const [count, setCount] = useState(0)

   function add() {
      // prevCount (here could be any name) is the old value of the state (here it is 0) 
      setCount((prevCount) => {
         /**************************************************************
            don't forget write RETURN
         ***************************************************************/
         return prevCount + 1
      })
      //  we will usually use the short form of the callback function 
      // setCount(prevCount => prevCount + 1)
   }

   return (
      <div className="counter">
         <button className="counter--plus" onClick={add}>+</button>
         <div className="counter--count">
            <h1>{count}</h1>
         </div>
      </div>
   )
}
// =============================================================================

// =============================================================================
/* Changing state Quiz

1. We have 2 options for what we can pass in to a state setter function.

   What are they ?

      a. New value of state

            function addItems() {
               setCount("diractly new value of state")
            }

      b. Callback function

            function addItem() {
               setCount("callback function")
            }

         whatever the callback function returns new value of state


2. When do we need to pass "New value" to the state setter function?

      Whenever we don't need the previous value of state to determine.
      That is when we don't need to modify the initial value of state,
      we just add a new value.

            function addItem() {
               setCount(1)
            }

      the old value of state was 0, and we changed it to 1, we dont need
      0 to determin 1

3. When do we need to pass "Callback function" to the state setter function?

      Whenever we need the previous value to determine the new value.
      We should never ever directly modify our state.

            function addItem() {
               setCount(prevCount => {
                  return prevCount + 1
               })
            }

      here we need the old state (0) to determin the new state (1) --> 
      
         new state = old state + 1 --> 0 + 1
*/
// =============================================================================

// =============================================================================
// Flipping state back and forth
import React, { useState } from "react"

function App() {

   // Initialized state for "isGoingOut" as a boolean
   const [isGoingOut, setIsGoingOut] = useState(true)

   // by clicking the button we need to flip true to false, back and forth 
   function changeMind() {
      /* here we need the previous value of the state to determine the new 
         value, so we will use callback function to return new value of state.
         if prevState (isGoingOut) is true it will return false, and opposite */
      setIsGoingOut(prevState => !prevState)
      // this does the same by ternary operator

      // setIsGoingOut(prevState ? false : true)
   }

   return (
      <div className="state">
         <h1 className="state__title">Do I feel like going out tonight?</h1>
         <button className="state__value" onClick={changeMind}>
            {/* Display "Yes" if `isGoingOut` is `true`, "No" otherwise */}
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
         </button>
      </div>
   )
}
// =============================================================================