// =============================================================================
/* A slice in Redux Toolkit is a way to organize our reducers. 
   It is typically used to group reducers that are related to a specific part of our application. 

   We can create a slice by importing the "createSlice" API from Redux Toolkit. 
   
      import { createSlice } from '@reduxjs/toolkit'

   Creating a slice requires:

      -name:         a string name to identify the slice.
      -initialState: an initial state value.
      -reducers:     one or more action creators to define how the state can be 
                     updated  */

// For example, the following code creates a slice called counterSlice:

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   value: 0,
   // или count: 0
}

const counterSlice = createSlice({
   name: 'counter',
   // full view of the object property need to be like  initalStata: initalState
   // but if name and key of an object property are the same, we can short it
   initialState,
   /* Redux requires that we write all state updates immutably logic in 
      reducers, by making copies of data and updating the copies. 
      However, Redux Toolkit's createSlice and createReducer APIs use Immer Library inside to allow us to write "mutating" update logic that becomes correct immutable updates. */
   reducers: {
      // we have 3 actions here: 

      // increment is an action, it is used to update the state of the slice. It takes one argument: the current state of the slice and returns the new state of the slice.
      increment: (state) => {
         state.value++;
      },
      // decrement is a action, it is used to update the state of the slice. It takes one arguments: the current state of the slice and returns the new state of the slice.
      decrement: (state) => {
         state.value--;
      },
      // incrementByAmount is an action, it is used to update the state of the slice. It takes two arguments: the curremt state and the action that was dispatched and returns the new state of the slice.
      incrementByAmount: (state, action) => {
         /* The action that was dispatched from a component is an object that 
            has a type property and a payload property. The type property is a string that identifies the action. The payload property is an arbitrary (произвольный) object that can be used to carry data with the action. For example, if we dispatch an action like this: dispatch(incrementByAmount(5)), then dispatched action will be:

               action incrementByAmount {
                  type: "counter/incrementByAmount",
                  payload: 5
               }
            
            This line updates the value property of the state by adding the value of action.payload to it.*/
         state.value += action.payload
      },
   },
});

// Once a slice is created, we can export the generated Redux action creators (we will import these actions to a component which state need to be changes with these actions)
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// we export default the hole slice (we will import this to store.js)
export default counterSlice.reducer // so here reducer is a function that gets state and action and changes the state


/* if we console.log the slice: 

      console.log(counterSlice)

   we will get an object

      Objetc {
         actions: { increment : f, decrement: f, incrementByAmount: f }
         ...
         name: "counter"
         ...
         reducer: f(state, action)
      }
// =============================================================================

// =============================================================================
/* We do not need to create a slice if we only have one reducer. However, if 
   we have multiple reducers that are related to each other, then we can create a slice to group them together. This can make it easier to manage the reducers and to test the application.   
   
   Here are some of the benefits of using slices:

      Organization: Slices can help you organize your reducers by grouping them together based on their functionality. This can make it easier to understand and maintain your Redux code.

      Reusability: Slices can be reused in different parts of your application. This can save you time and effort when you need to implement the same functionality in multiple places.

      Testing: Slices can be easily tested in isolation. This can help you ensure that your reducers are working correctly before you integrate them into your application.

   Here are some tips for deciding whether or not to create a slice:

      Consider the size and complexity of your reducers: If you have a single reducer that is relatively simple, then you may not need to create a slice. However, if you have multiple reducers that are complex, then you should consider creating a slice to group them together.

      Consider the functionality of your reducers: If your reducers are all related to the same functionality, then you should consider creating a slice to group them together. This will make it easier to understand and maintain your Redux code.

      Consider the reusability of your reducers: If you think that you might want to reuse your reducers in different parts of your application, then you should consider creating a slice. This will make it easier to reuse your reducers and to ensure that they are working correctly.*/
// =============================================================================

// =============================================================================
/* Now we will crete a slice for our filter - filterSlice.js,
   and it will contain in it logic of category and sort filtration

my - app / src / redux / slice / filterSlice.js

   in filterSlice.js file we need at first to write an inital state
inital - state is the first - ever state. 
   
   useState has inital state(0 is the inital state here)

const [state, setState] = useState(0)  
      
   so sliece need to have its own inital state too(it is an object),  
*/
import { createSlice } from '@reduxjs/toolkit'

const initalState = {
   /* as our filter filters pizzas by categories and by types ('rating',)
      so we set here ever-first state for these. 
      for catefory it is 0, it means that will et first when we load the page will be choosed the category with 0 id, and for type (sort) will be choosed by rating ('по популярности')   */
   categoryId: 0,
   sort: {
      name: 'по популярности',
      sortProperty: 'rating'
   }
}

// and now under the initalState we will crete the slice
const filterSlice = createSlice({
   // it is a function and it will allow us to create a slice in filterSlice varible - where will be stored processing logic of our state
   // in the top we write the slice name
   name: 'filters',
   // then we write the inital state of the slice (that we created above)
   initalState,      // this is the same as   initalState: initalState
   // now we will create reducer functions for sorting and filtering, for this we will create a reducer object wich will have 2 reducer functions (methods) in it:.
   reducers: {
      // the first reducer function is for categories filtering. this method will get state and action as parameters when it will be called
      setCategoryId(state, action) {
         // in state we will save what we get in action payload (action it is an object that will have a type and any other information)
         state.categoryId = action.payload
      },
      // the second reducer function is for sorting
      setSort(state, action) {
         state.sort = action.payload
      }
   }
})

// and we will export our reducer functions from the reducer to the components where it need to be used
export const { setCategoryId, setSort } = filterSlice.actions
// here we destructer filterSlice.actions (reducer functions) and export them

// and we will export all the reducer by defalt, 
export default filterSlice.reducer
// we will import it to the store.js
// =============================================================================

// =============================================================================
// Fter we created the slice we need to pass it to the store, then use it in our app
// =============================================================================