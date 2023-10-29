/* 
   images in React
      import image (src folder)
      in public folder
*/

// there are 2 common ways to use image (any other file - audio, vidoe) in react

// =============================================================================
// import image

/* in src folder there is a assets folder, we save an img in src/assets folder 
   and import it on the top of the component page, (or create a new img folder in src/assets folder like src/assets/img) */
import reactLogo from './assets/react.svg'


// then we use it in a component as a varible
function App() {

   return (
      <div className="App">
         <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
   )
}
/* 
   now if in dev tools we open the img, we will see that there is a link with a long name in this case, weabpack will give to our image file an unic name and save that name src={reactLogo}
*/
// =============================================================================

// =============================================================================
// in public folder 

/*****we also can save image in public folder, and use it like as in html
   for this we will create an img folder in public folder, save images in it, and use them */

function App() {

   return (
      <div className="App">
         <img src='img/reactLogo.svg' className="logo react" alt="React logo" />
      </div>
   )
}
// =============================================================================