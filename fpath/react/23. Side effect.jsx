// ============================================================================
// Side effect - enything that React can't handle its own

/*
   What are React's primary tasks?

      1. Work with the DOM/browser to render UI to the page. React is takeing
         JSX and turning it into elements that can be displayed on the page.
      2. Manage state for us between render cycles, in other words (i.e.)
         React can remembers state values from one render to the next.
         We are allowed to do it useing the useState() Hook.
      3. Keep the UI updated whenever state changes occur.


   What can't React handle on its own?

      Any kinde of side (outside) effects. i.e. enything that lives outside of React 

            -locaStorage,  for example on our own browser.
                           Of caurse we can write some code to interact with localstorage but React has no real hand interfacing localstorage.
            -API/database interactions. We can write some  code to interact with
                           APIs but React is not encharg that code. React has no
                           way to know which API we are going to reaching up to.
            -Subscriptions (e.g web sockets), for example we have a chat      
                           aplication that updates live.
            -Syncing 2 different internal states together, or when one of this 
                           states have to update another state.
            -Basically anything that React isn't in charge of

      React can’t handle these operations on its own because they don’t fit into the concept of a pure function, which is what a component’s render method should ideally be.
*/
// ============================================================================

// ============================================================================
// Side effect

/* If we run this function we will see that it will rendering the App 
   component over and over again, we will stuck in infinite loop and get 
   in console "Component rendered" again and again. Why we get that?   */
function App() {

   const [starWarsData, setStarWarsData] = React.useState({})

   fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))

   console.log("Component rendered")

   return (
      <div>
         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
   )
}
/* The reason we are stuck in infinite loop, because `Fetch or Axios` live
   on the top level of our component, because of that every time the component
   renders, it is going to call `Fetch or Axios`:     */
fetch("https://swapi.dev/api/people/1")
   .then(res => res.json())
   .then(data => setStarWarsData(data))

   // and every time it calles fatch it is going update the state:  
   .then(data => setStarWarsData(data))

/* updating the state cosing the React to rerender this component.

   And we will have an infinite loop:
   Rendering the component --> running fetch --> setting the state -->
   rerendering the componnet --> running fetch again --> setting the state...

   So if we are leaving the code on the top level of the component,
   React really dosen't have a way to stop the infinite loop.

   The React team gives a fine tool for solveing this problem - Effet Hook,
   (useEffect()) it allows us to interact outside of React ecosystem.   */
// =============================================================================