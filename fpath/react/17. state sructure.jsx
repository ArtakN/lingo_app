/* There are 2 ways to structure the state:

   1. Local state - when we create new state for each component in own 
      component, and inital that state based on the incoming props. 
      Every component will have ability to update own state. 
      benefit of this way is the simplicity.

   2. unified state - when we create state in parent component. 
      We will share the state if only the component need it. 

      It wouldn't be a good idea to initialise a state in the parent component if we don't have a component entire tree that need that. For example if we have only one children component that need state, there is no reason to put the state in it's parent or its grandsparent component, and then pass it the props. As rule of thumb we need to keep the state as local as we can.
      
      ??????????however general consensus is that if we initalising state
      by using incoming value of some props, there is probably better way to do this. 
*/

// =============================================================================
// 1. local state
function Box(props) {
   const [on, setOn] = useState(props.on)

   const styles = {
      backgroundColor: on ? "#222222" : "transparent"
   }

   function toggle() {
      setOn(prevOn => !prevOn)
   }

   return (
      <div style={styles} className="box" onClick={toggle}></div>
   )
}
// =============================================================================

// =============================================================================
// 2. Unified state

import boxes from "./data.js"

/* we created state in App component and then pass abbility to invoke toggle()
   function from Box components, we need to figure out which sqaure was clicked to toggle it.
   So we need to do somethig to give the toggle() fuction abbility to know which box was clicked, so that we correctly update state array.
   onw way we could do that is make the toggle() function takes the id of the box as a parameter, but as we pass the function to the child component as a prop toggle(id) will not work, to make work it we need to add id to Box component, for this in App.js we will pass id={square.id} to the Box component, so it will give access to the item id in Box component.
   now in Box component insted of runing onClick={toggle} we will run
      onClick={() => props.toggle(props.id)} and now 
   on item click toggle function will get the id and know which square was clicked   */

// Box.jsx
function Box(props) {
   const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
   }

   return (
      <div
         style={styles}
         className="box"
         /* a. every time box get clicked, it runs a callback function which 
            via props will invoke toggle function and pass in it as a parameter - box id   */
         onClick={() => props.toggle(props.id)}
      >
      </div>
   )
}

// App.jsx
function App() {

   const [squares, setSquares] = useState(boxes)

   // b. then toggle function will be invoked with id as a parameter
   function toggle(id) {
      // c. it will call our state setter function - setSquares, 
      setSquares(prevSquares => {
         // then we map prevSquare, map returns a new array 
         return prevSquares.map((square) => {
            /* every time we loop over an item in this array, we chacking if 
               it's id mathces the id that we passed to the toggle function
               and if those ides match, that means it is the square that needs 
               collect we copy a new object and overwrite on value with its 
               opposite, if its false, then just give the old object, 
               because we dont make any modifications to it. */
            return square.id === id ? { ...square, on: !square.on } : square
         })
      })
   }

   const squareElements = squares.map(square => (
      <Box
         key={square.id}
         id={square.id}
         on={square.on}
         toggle={toggle}
      />
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}
// =============================================================================