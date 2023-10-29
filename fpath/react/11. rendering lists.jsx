/*
   rendering lists
      Mapping array as html elements
      Key property of list elements
*/

// =============================================================================
/* The map() method creates a new array with the results of calling a provided function on every element in the original array. The original array remains unchanged. */

// Given an array of numbers, return an array of each number, squared
const nums = [1, 2, 3, 4, 5]

const squares = nums.map(function (num) {
   return num * num
})

console.log(squares)
// -->       [1, 4, 9, 16, 25]

// -----------------------------------------------------------------------------

// Given an array of strings, return an array where the first letter of each string is capitalized

const names = ["alice", "bob", "charlie", "danielle"]

const capitalized = names.map((name) => {
   return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalized)
// -->        ["Alice", "Bob", "Charlie", "Danielle"]


/* inside react component is a html space so we don't need backticks to map array as html elements, if we will use backticks react will render html elements as text   */
function App() {

   const colors = ["Red", "Orange", "Yellow", "Green"]

   const newColors = colors.map((color) => {
      return <h1>{color}</h1>
   })

   return (
      <div>
         {/* inside react component is a html space, so js we write in { } */}
         {newColors}
      </div>
   )
}
// -->      [<h1>Red</h1>, <h1>Orange</h1>, <h1>Yellow</h1>, <h1>Green</h1>]

// **** if we write only a function without param inside the map we will get an array with undefined elements
console.log(colors.map(() => { }))
// --> [undefined, undefined, undefined, undefined]
// =============================================================================

// =============================================================================
/***
refactoring: 
   -when we have only one parameter we don't need parentheses for argument
   -if we have one line entry we don't need "return"
   -if we write the entry on one line with the parameter, we dont need {}
*/
function App() {

   const colors = ["Red", "Orange", "Yellow", "Green"]

   const newColors = colors.map(color => <h1>{color}</h1>)

   return (
      <div>
         {newColors}
      </div>
   )
}

/* but if we want to write the entry on the next line without return,
   we need use parentheses  */
const newColors = colors.map(color =>
(
   <h1>{color}</h1>
))
// =============================================================================

// =============================================================================
// key property of list elements

/* ***********************************************************
      Each child in a list should have a unique “key” prop. 
   ***********************************************************

   We always get a worning "use key" when we use a list (usually we get a list 
   by method map). When we use a data, usualy there is a id in the data and we
   write key={id}.*/
function App() {

   const [square, setSquare] = useState(boxes)

   let boxesList = square.map(box => (
      //*** we take it of each element - box.id */
      <div className="app__box" key={box.id}>
         {/* ***we set key to the parent elemen, not children element*/}
         <p></p>
      </div>
   ))

   return (
      <main>
         <h1>Boxes will go here</h1>
         {boxesList}
      </main>
   )
}

// -----------------------------------------------------------------------------

// But what to do when we use method map not for data, but to map a little array.  
function App() {
   // we have an array with 2 elements
   const thingsArray = ["Thing 1", "Thing 2"]
   // we use key as an atribute and pass there the element.
   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

   return (
      <div>
         <button>Add Item</button>
         {thingsElements}
      </div>
   )
}

// index as key 

// *** We need to avoid to use index of array as key, because we deleta an element from array, inexes for rest elements eill be changed, and we could have problems.
// =============================================================================

// =============================================================================
// rendering components with map 

// App.jsx
import boxes from "./boxes"  // boxes.js is a data file that includes an array 
import Box from "./Box"


export default function App() {
   const [squares, setSquares] = React.useState(boxes)

   /* here we use method map to render Box component as many 
      times as there are elements in the squares array  */
   const squareElements = squares.map(square => (
      // we pass "on" (boolean) property as a prop to the Box component 
      <Box key={square.id} on={square.on} />
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}

// Box.jsx
export default function Box({ on }) {
   // if "on" is true then bg color will be gray, otherwise black
   return <div style={{ backgroundColor: on ? "#222222" : "#000000" }}></div>
}
// =============================================================================

// =============================================================================
/*
Quiz

1. What does the `.map()` array method do?

      Returns a new array. Whatever gets returned from the callback
      function provided is placed at the same index in the new array.
      Usually we take the items from the original array and modify them
      in some way.

2. What do we usually use `.map()` for in React?

      Convert an array of raw data into an array of JSX elements
      that can be displayed on the page.

3. .map(()=>{}) - callback function in map is a function that is executed for
   each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

      currentValue: The current element
      index: The index of the current element
      arr: The array that map()
*/
// =============================================================================