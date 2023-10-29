// =============================================================================
// Render

// index.html
// <div id="root"></div >

// index.js
// We import React in our files, because React is what defines JSX
import React from "react"
import ReactDOM from 'react-dom/client';

//                          WHERE TO RENDER          WHAT TO RENDER             
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
)
/* Этот запис означает:
      показывай компонент в елементе с id="root", с помощью метода `render`   */

// -----------------------------------------------------------------------------

/* when we render App component, all its children components  renderes, too
   (<Header />, <Main />, <Footer />)   */
function App() {

   return (
      <div>
         <Header />
         <Main />
         <Footer />
      </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
// =============================================================================