/*
   Components
      nesting components
      definition
      return statements 
      root component
*/

// =============================================================================
/* React apps are made out of components. 
   A component is a piece of the UI (user interface), that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

   React component is a JavaScript function that we can sprinkle (дополнить) with markup, but their names must start with a capital letter or they won’t work!  */

function MyButton() {
   return (
      <button>I'm a button</button>
   );
}

// Now that we’ve declared MyButton, we can nest it into another component:

export default function MyApp() {
   return (
      <div>
         <h1>Welcome to my app</h1>
         <MyButton />
      </div>
   );
}
/* Notice that <MyButton /> starts with a capital letter.That’s how you know
   it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase. */

// As we know, in React, a component can be defined as a JavaScript function., so it is posible to call this function by common way

export default function MyApp() {
   return (
      <div>
         <h1>Welcome to my app</h1>
         {MyButton()}
      </div>
   );
}
// but we will render components (call functions) by this way <MyButton />, because it is more like HTML
// =============================================================================

// =============================================================================
// Components can render other components, but you must never nest their definitions:
export default function Gallery() {
   // 🔴 Never define a component inside another component!
   function Profile() {
      // ...
   }
   // ...
}
// =============================================================================

// =============================================================================
// Return statements can be written all on one line, as in this component:

return <img src="https://i.imgur.com/MK3eW3s.jpg" alt="Katherine Johnson" />;

/* But if our markup isn’t all on the same line as the return keyword, we 
   must wrap it in a pair of parentheses: */

return (
   <div>
      <img src="https://i.imgur.com/MK3W3As.jpg" alt="Katherine Johnson" />
   </div>
);
// =============================================================================

// =============================================================================
// root component

function App() {
   return (
      <nav></nav>
   );
}
/* App component is the root component of the project if we create project by
   Vite, but if we create it with next.js every page will have it's root component   */
// =============================================================================