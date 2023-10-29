// ===========================================================================
// API   - Application Programming Interface 

/* A very common thing we do in React is interact with an API that lives 
   outside of our application. 

   Usually what we doing is ether requesting information from an API or sometimes submitting information to an API.

   Whenever we requesting information from an API in React usually we want to dispaly that inforamtion or use it somehow. So getting data from an API in React consist of essentially 2 parts:

      1. Get the data, using tools something like `Fetch` or `Axios`
      2. Save the data to state.
   
   Once it saved in state, our application can interact with it - display on the screen, and all benefits that coming with saveing in the state.  */
function App() {

   // We crete a state and set its initial value an empty object
   const [starWarsData, setStarWarsData] = React.useState({})

   // 1. GET the data using fetch
   // we make a fetch request to this url and get a rpmise
   fetch("https://swapi.dev/api/people/1")
      // then we take the response and parse the JSON to JS
      .then(res => res.json())
       // 2. then we get some js data back and pass it into our state 
      .then(data => setStarWarsData(data))

   return (
      <div>
         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
   )
}
// ============================================================================

// ============================================================================
// Side effect

/* But if we run this function we will see that it will rendering the App 
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
      on the top level of our component, because of that every time the component renders, it is going to call 'fatch':  */
   fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
      // and every time it calles fatch it is going to set the starWarsData:  
      .then(data => setStarWarsData(data))
   
   /* which is updating our state and there for cosing the React to rerender
      the component.
   
      And we will have an infinite loop:
      Rendering the component --> running fetch --> setting the state -->
      rerendering the componnet --> running fetch again --> setting the state...*/
   // =============================================================================