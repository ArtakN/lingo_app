// =============================================================================
/* The Redux store is a single source of truth for the state of our application.
   The store in Redux Toolkit is a central hub that stores the state of our 
   application. It is responsible for managing the state of our application, dispatching actions, and subscribing to changes in the state.

   The store in Redux Toolkit is an object that has the following properties:

      -state:  The state is the current state of your application. It is an
               immutable object that can be accessed and modified by dispatching actions.

      -dispatch: The dispatch function is used to dispatch actions to the store.
               Actions are objects that describe changes that you want to make to the state of your application.

      -subscribe: The subscribe function is used to subscribe to changes in the
               state of the store. When the state of the store changes, the subscribers will be notified of the change.

   The store in Redux Toolkit is also a wrapper around the Redux store.This means that it provides all of the same functionality as the Redux store, but it also adds some additional features, such as:

      -Helper functions: Redux Toolkit provides a number of helper functions that make it easier to create and use stores.These helper functions can save your time and make your code more concise.

      -Default settings: Redux Toolkit provides default settings for the store, such as the middleware that is used. This can help to ensure that your store is configured in a consistent way.

      -Immer integration: Redux Toolkit integrates with the Immer library, which makes it easier to write immutable update logic. Immutable update logic is a way of updating the state of your application without creating new objects.This can help to improve the performance and readability of your code.  */
// =============================================================================

// =============================================================================
/* In the src folder we create redux folder, and inside it create store.js

      react-app/src/redux/store.js

   we will keep all our state in store.js

   The first step when using Redux Toolkit for our app is to import the 
   "configurStore" API from Redux Toolkit and create an empty Redux store, and export it: */

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer: {},
})

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that we can inspect the store while developing.
// =============================================================================

// =============================================================================
/* Once the store is created, we can make it available to our React components
   by putting a React-Redux <Provider> around our application in src/index.js. We import the Redux store we just created, put a <Provider> around our <App>, and pass the store as a prop to the <Provider>. It makes store available to all child components of the App component. */

import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         {/* we passed store to the provider and now all components of 
             our App can get data from the store. */}
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter >
   </React.StrictMode>,
)
// =============================================================================