/*
   Styles in React
      className
      inline styles
      css modules
      scss
*/

//=============================================================================
/* in JSX we will use className insted of class

          <h1 className="header">      */
//=============================================================================

//=============================================================================
// inline styles

// as we know in HTML we can add syles passing it directly to the HTML tag in style property (inline styles)
<div style="with: 100px; height: 100px; border: 1px solid #000; margin-bottom: 8px "></div>

/* we can do the same in React, but in React we are not going to put a string in a style property as we do it in HTML. Instead we are going to provide an object.  */
function App() {

   const squareElements = squares.map(square => (
      /* to add styles directly in JSX element we use double curly braces: {{}} 
         {{}} - first of them we need to go to JS area, and second to pass a object.
         And 2 word properties we need to write camelCase - marginTop  */
      <div style={{ border: "1px solid #000", borderRadius: "5px" }} key={square.id}></div>
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}

//------------------------------------------------------------------------------

/* But often time we will use this type writing:
   create object with styles seperatly then use it in our markup */
function App() {

   // here we creat an object of styles
   const styles = {
      border: "1px solid #000",
      borderRadius: "5px"
   }

   const squareElements = squares.map(square => (

      // here we use the styles object
      <div style={{ styles }} key={square.id}></div>
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}
//==============================================================================

//==============================================================================
// css (scss) modules

/* instead of BEM we can use css modules system for styling, it gives
   opportunity not to horry about reapiting class names for different
   components

   for this we need to create a css or scss module for every component

      Home.module.css    or   Home.module.scss 

      .title {
         color: #000;
      }

   it creates object, we will use it as styles object 
   we need to import this styles object to our component  */
import styles from "./Home.module.css"

/* then to use classes in the component, we need to use every class as 
   an object property of the styles object  */
export default function Home() {
   return <>
      {/* we use .title property of styles object */}
      <h1 className={styles.title}>Home page</h1>
   </>
}

// -------------------------------------------------------------------------

// how to use scss in React

/* react dosn't know what is scss, so we need to install sass at first,
   for this in terminal we go to our project folder and write

      npm install sass

   then we will import and use scss modules similar to css modules. */

// to add 2 classes to a element using modules
<button type='button' className={`${styles.prevBtn} ${styles.btn}`}>next</button>
//=============================================================================

//=============================================================================
/* npx - отвечает за устоновку и запуск javsscript программ c далнейшим
   автоматическим удалением, после того как мы завершили рабоатть с этой программой

   npm - отвечает за установку библиоттек    */
//=============================================================================
