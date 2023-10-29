/* 
   Add event listener
      -in JS
      -in HTML
      -in React
         onClick
         onMouseOver
   Passing event handlers as props 

*/

// ==========================================================================
// There are 2 ways to add events to your program

// 1. adding it in JavaScript, this type is better for JavaScript
let elementBtn = document.getElementById("eny_clickable_element_id")

elementBtn.addEventListener("click", function () {
   // inside the function we put the code what ever should 
   // happen when the element gets clicked 
})

// --------------------------------------------------------------------------

/* 2. adding it in html

         < body >
               *** don't forget to write parentheces after function() ***
              <button onclick="function()" id="btn">Click me</button>

              <script src="index.pack.js"></script>
          </ body >                                            */

// --------------------------------------------------------------------------

/* The second way is going to be much more similar to how we actualy
   accomplish add event listener to the items in React.   */

// This is how we are doing it in React
function App() {

   return (
      <div className="container">
         <img src="https://p.p" />
         <button onClick={function () { console.log("I was clicked!") }}>Click me</button>
      </div>
   )
}
// but we will avoid to stuff the function inside of markup 

// instead of it we will write by this way
function App() {

   // We will create a function above then return it in the component
   function handleClick() {
      console.log("I was clicked!")
   }

   return (
      <div className="container">
         <img src="https://p.p" />
         <button onClick={handleClick}>Click me</button>
         {/*** If we will write the fanction with parentheses, like this: 
                  { handleClick() } 
               the function will be invoked as soon as we open the page. 
               We have to write it without the parentheses because it is 
               a callback function, and needs to be invoked after the 
               buton is clicked.    */}
      </div>
   )
}

// but sometimes we need to pass parameters to the function, so in this case we need to call the function on click with callback function
return (
   <div className="container">
      <img src="https://p.p" />
      {/*** we add parameters to the function */}
      <button onClick={() => handleClick(index, param)}>Click me</button>

   </div>
)
// ==========================================================================

// ==========================================================================
/* Passing event handlers as props

   We can declare an event handler in a parent component and pass it as a prop to a child component.   */
function App() {

   function handleClick() {
      console.log("I was clicked!")
   }

   return (
      <div className="container">
         <Profile handleClick={handleClick} />
      </div>
   )
}
// ==========================================================================

// ==========================================================================
/* Recap

   You can handle events by passing a function as a prop to an element
      like <button>.
   Event handlers must be passed, not called! onClick={handleClick},
      not onClick={handleClick()}.
   You can define an event handler function separately or inline.
   Event handlers are defined inside a component, so they can access props.
   You can declare an event handler in a parent and pass it as a prop
      to a child.
   You can define your own event handler props with application-specific names.
   Events propagate upwards. Call e.stopPropagation() on the first argument
      to prevent that.
   Events may have unwanted default browser behavior. Call e.preventDefault()
      to prevent that.
   Explicitly calling an event handler prop from a child handler is a good
      alternative to propagation.   */
// ==========================================================================