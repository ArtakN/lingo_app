/*
   JSX
      -className
      -JSX converter
      -single root element
      -JSX returns JS objects
      -Every tag need to be closed
*/

// =============================================================================
// JSX

/* JSX is a syntax extension for JavaScript that lets us write HTML-like markup 
   inside a JS file. 
   JSX is stricter and has a few more rules than HTML
      1. Return a single root element it can be <div></div> or Fragment (<></>)
      2. Close all the tags   (<img />, <br />...)
      3. camelCase all most of the things! ( instead of stroke-width you use strokeWidth)
      4. in JSX we will use className insted of class
         <h1 className="header"> 
         
   It recommended using a converter to translate existing HTML and SVG to JSX.
   convertor link: https://transform.tools/html-to-jsx 
   
   *****************************************************************************
   JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
   ****************************************************************************/
// =============================================================================

// =============================================================================
// Single root element

/* We need our JSX to be nested under a single root element, For example, 
   we can use a <div>
   If we don’t want to add an extra <div> to our markup, we can write 
   <></> instead:
   This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree. 
*/

const page = (
   <>
      <h1>Hello</h1>
      <p>This is my website!</p>
   </>
)

/***** Why do multiple JSX tags need to be wrapped? 

   JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. 
   We can’t return two objects from a function without wrapping them into an array. 
   This explains why we also can’t return two JSX tags without wrapping them into another tag or a Fragment.   */
// =============================================================================

// =============================================================================
// JSX returns JavaScript objects

/* JSX is like a function, that when it runs, it returns JavaScript object that 
   react can interprate and use to create actual elements that put on screen for us. */
function App() {
   const element = <h1 className="header">This is JSX</h1>
   console.log(element)
}
/*
{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
*/

const page = (
   <div>
      <h1>Sample page</h1>
      <ul>
         <li>Users</li>
         <li>Dialogs</li>
         <li>Contacts</li>
      </ul>
   </div>
)

// if we try to append JSX to our "root" using method .append(), we will get [object Object], 
document.getElementById("root").append(page)
// because JSX returns JS objects, and when we are trying to append it, DOM doesn't recognize it.

/* but when we are rendering it useing ReactDOM.render, React takes these JS 
   objects and turn them into real DOM elemetns.  */
ReactDOM.render(page, document.getElementById("root"))
// =============================================================================

// =============================================================================
// it is better to set files that contain jsx syntex with .jsx insted of .js. React components containes jsx syntex so we will set them .jsx
// =============================================================================