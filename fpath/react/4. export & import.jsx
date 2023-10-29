/*
   Export & import
      default
      named
      mix  
      import image 
*/

// =============================================================================
// export & import

/* Components are regular JavaScript functions, so we can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If the file gets crowded, we can always move a component to a separate file. */

// Exporting and importing a component

// -----------------------------------------------------------------------------

// export as default

// in Gallery.jsx we export Gallery component as default
export default function Gallery() {
   return (
      <section>
         <h1>Amazing scientists</h1>
         <Profile />
      </section>
   );
}
// we write 'default' after export

// in App.jsx we import and use Gallery component
import Gallery from './Gallery.js';

function App() {
   return (
      <Gallery />
   );
}
// when we import as default, we can write any name here insted of Gallery
// for example we can write 
import GalleryComponent from './Gallery.js';
// -----------------------------------------------------------------------------

// export as named

// Main.js
export function Button() {
   return (

   )
}
// hier we write only export 

// App.js
import { Button } from './Main.js'

function App() {
   return (
      <Button />
   )
}

/*******************************************************************************
   A file can has no more than one default export,
   but it can has as many named exports as you like.

         Export statement	                    import statement

Default	export default function Button() { }  import Button from './Button.js';
Named	   export function Button() { }      import { Button } from './Button.js';
*******************************************************************************/

/* When we write a default import, we can put any name we want after import.
   For example, we could write import Banana from './Button.js' instead and it would still provide with the same default export.

   With named imports, the name has to match on both sides.
   That’s why they are called named imports!

   People often use default exports if the file exports only one component,
   and use named exports if it exports multiple components and values.  */

// ****** if we want to change the name of named imports, we can do it like this
import { cars as carsData } from 'cars.data.js'
// now we can write it as carsData

// -----------------------------------------------------------------------------

// export as mix

/* But sometimes we can use a mix of default and named exports one of
   components we will export as default (usually it is the main component in the page) and other components we write as named */

// in Gallery.jsx we export one component by named and the second compnent by default
export function Profile() {
   return (
      <img
         src="https://i.imgur.com/MK3eW3As.jpg"
         alt="Katherine Johnson"
      />
   );
}

export default function Gallery() {
   return (
      <section>
         <h1>Amazing scientists</h1>
         <Profile />
      </section>
   );
}

// in App.js we import both of components one by default, second named
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
   return (
      <Profile />
   );
}
// =============================================================================

// =============================================================================
// import image

// we import a img on the top of the component page
import reactLogo from './assets/react.svg'

// then we use it in a component as a varible
function App() {

   return (
      <div className="App">
         <h1>React</h1>
         <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
         </div>
         <div className="card">
            <button onClick={() => setCount((count) => count + 2)}>
               count = {count}
            </button>
         </div>
      </div>
   )
}

// ***we also can save image in public folder, and use it like as in html
< img src="img/reactLogo" className="logo react" alt="React logo" />
// =============================================================================