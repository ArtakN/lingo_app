/* 
   Why React
      -declarative
      -composible
*/

// =============================================================================
/* Why React
      React is declarative
      React is composible     */

// -----------------------------------------------------------------------------

// React is declarative

/* When a program is Declarative, we can simply tell - what should be done?
   It's like computer saying: "Just tell me what to do, and I'll worry about how I get it done." */

// Declarative way a programm (React)
ReactDOM.render(<h1 className="header">Hello!</h1>, document.getElementById("root"))

// -----------------------------------------------------------------------------

// JavaScript is imparative

/* Imperative is opposite of declarative: when a program is Imperative, we need 
   to tell - how should it be done?
   It's like computer saying: "Describe to me every step on how to do something, and I'll do it."

   Upon till now, if we using JavaScript every time we need to create elements on a page, we have been doing in an imparative way.  */

/* Imparative way a programm (JS) - here we use createElement(),  
   append() methods to render an element on the page and className to add a class to the element (but we don't use this syntexis, because there is better way to do it), usually we use innerHtml to render an element and classList.add() to add a class to the elelement.  */
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
// =============================================================================

// =============================================================================
// Composible

/* We have small pieces that we can put together to make something larger/
   greater than the individual pieces.    */

// We can apply composible nature of React by creating our own custom components
// =============================================================================