/* The state of our application is saved in the Redux store. The Redux store 
   is a single source of truth for the state of our application. This means that the state of our application is stored in a single location and is accessible from anywhere in our application.

   The Redux store is implemented as a JavaScript object. This means that the state of our application is stored in memory. However, we can also persist the state of our application to disk using a Redux middleware like Redux-Persist.

   The state of our application is not explicitly defined in our store code. The state of our application is implicitly defined by the reducer functions that we have passed to the configureStore function. */
// =============================================================================

// =============================================================================
/* A reducer in Redux Toolkit is a function that takes the current state of 
   our application and an action as arguments, and returns a new state. Reducers are used to calculate the new state of your application based on the current state and actions.

   Reducers are a key part of Redux Toolkit. They are responsible for managing the state of your application in a predictable way. Reducers are also immutable, which means that they cannot change the state of your application directly. Instead, they must return a new state object. */

// Here is an example of a reducer of Redux: 
const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return state + 1;
      case 'DECREMENT':
         return state - 1;
      default:
         return state;
   }
};
/* This reducer takes the current state of the counter variable and an action
   as arguments. The reducer then checks the type of the action. If the action type is INCREMENT, then the reducer increments the counter state by 1. If the action type is DECREMENT, then the reducer decrements the counter state by 1. Otherwise, the reducer returns the current state.

   Reducers are a powerful tool that can help you to manage the state of your application in a predictable way. They are also immutable, which makes them easier to test and reason about. */
// =============================================================================