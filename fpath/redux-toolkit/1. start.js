/* If we create a  big project only with hooks, it will be uncomfort.

      - there will be a lot of Context values and a lot of functions and code
      - ***changeing one of the Context value will cause of rendering all
         components that use this Context, because contaxt is a object, and updating one property of the object causes updating the hole object, and if other components use other properties of the Context object, they will be rerendered, too.

            <AppContext.Provider value={{stateA, setStateA, stateB, setStateB}}>
               <ComponenetA />
               <ComponenetB />
            </AppContext.Provider>

         if we change stateA, it will recreate the object in value and all properties of the object will be renew and it will cose rerender all the components that use the Context.

        When we use the Redux toolkit, the Redux toolkit tracks of which components need to be rerendered, and only the component whose state has changed will be reredered.

   -----------------------------------------------------------------------------

   The best practice is to use redux-toolkit when we do a big projects.
   Redux is a js library, so it is uses not only with react.

      https://redux-toolkit.js.org/tutorials/quick-start

   -----------------------------------------------------------------------------

   To use Redux Toolkit we need to install redux-toolkit and react-redux libraries to our project

      npm install @reduxjs/toolkit react-redux

   @reduxjs/toolkit is a js library
   react-redux is a react library         */
// =============================================================================