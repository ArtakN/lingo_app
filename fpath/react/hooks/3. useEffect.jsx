// =============================================================================
/* useEffect() hook (Effect Hook) is a tool from the React that allows us 
   to interact outside of the React ecosystem

   i.e. useEffect() is a tool that allows to syncronise React state with 
   those outside systems, like our local storage or an API/database  */

// -----------------------------------------------------------------------------

// Syntex and default behavor

/* We can access the useEffect() hook on the top of the React object like
   useState() hook.
   We can create a side effect by using useEffect()

   useEffect has one required parameter and one optional parameter.
      1. the first parameter is a callback function, in this function we will 
         put side effects code.
      2. the second parameter is a dependeces array. It is optional but we 
         will almost always include it. The array will containes values that
         if the change from one render to the next will cose this effect to run.
         In other words it limits the number of times that this effect will run.
         Already it determines when this effect will run insted of running after 
         every single render.    */
import React, { useEffect } from 'react';

useEffect(() => {
   // we put side effects code here
}, [])
/* if we leave the second parameter as an empty array, it effected and the
   function (the first parameter) will run on the very first render but
   then there are no dependences to watch and trigger this effect to run again.
   so it will rendered once when the component first run. 
   (It is like componentDidMount lifecicle method for the class components 
      - it is not use any more   */

// -----------------------------------------------------------------------------

// If we don't write the second parameter,  
useEffect(() => {
   console.log('DID MOUNT')
})
// it will run on the very first render and every component updated time (rerendered) 

// -----------------------------------------------------------------------------

/* if we want to run useEffect's function depended of an verible, 
   we need to write the verible as the second parameter    */
import React, { useState, useEffect } from "react"

export default function App() {
   const [starWarsData, setStarWarsData] = useState({})
   const [count, setCount] = useState(0)

   console.log("Component rendered")

   useEffect(() => {
      console.log("DID MOUNT")
   }, [count])
   /* for example here our dependence is `count` varible,
      it means that effect function will run on the very 
      first time and any time `count` changes.  */

   return (
      <div>
         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
         <h2>The count is {count}</h2>
         <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
   )
}

// -----------------------------------------------------------------------------

// the function (useEffect's first parameter) can run depended of more than one varible
useEffect(() => {
   console.log("DID MOUNT")
}, [count, number])
// every count or number varibles change will cause useEffect's function to run
// =============================================================================

// =============================================================================
// useEffect() cleanup function  

// it allows us to see that the component is removed, (it closed - we go another page)
// (like componentUnMount lifecylce method for class components)
useEffect(() => {
   console.log("DID MOUNT")
   return () => {
      console.log('UN MOUNT')
   }
}, [])
// for this useEffect return a new ananimous funtion 

// =============================================================================

// =============================================================================
// component lifesycle

/* every component has lifecycle 
   in class components there were 3 lifecycle methods
    
      componnetDidAmoun()     - is invoked immediately after a component is mounted 
                                 (inserted into the tree).
      componentDidUpdate()    - is invoked immediately after updating occurs.
      componentWillUnmount()  - is invoked immediately before a component is unmounted 
                                 and destroyed. Perform any necessary cleanup in this method, 
                                 such as invalidating timers, canceling network requests, 
                                 or cleaning up any subscriptions that were created in 
                                 componentDidMount().

   these all 3 lifecyles we can get with useEffect() hook.
*/
// =============================================================================

// =============================================================================
/* Quiz

   1. What is a "side effect" in React? What are some examples?

      - Any code that affects an outside system.
      - local storage, API, websockets, two states to keep in sync

   2. What is NOT a "side effect" in React? Examples?

      - Anything that React is in charge of.
      - Maintaining state, keeping the UI in sync with the data,
        render DOM elements

   3. When does React run your useEffect function? When does it NOT run
      the effect function?

      - As soon as the component loads (first render)
      - On every re-render of the component (assuming no dependencies array)
      - Will NOT run the effect when the values of the dependencies in the
        array stay the same between renders

   4. How would you explain what the "dependecies array" is?

      - Second paramter to the useEffect function
      - A way for React to know whether it should re-run the effect function
*/
// =============================================================================

