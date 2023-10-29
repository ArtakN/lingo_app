import { configureStore } from '@reduxjs/toolkit'

/* Add Slice Reducers to the Store:

   Next, we need to import the reducer function from the slice and add it to our store.  */
import counterReducer from '../features/counter/counterSlice'
// as we exported "counterSlice.reducer" by default in counterSlice.js file,  we can import it with any name. We named it "counterReducer" here.

export const store = configureStore({
   // counterReducer contains the all logic that changes the state 
   reducer: { counter: counterReducer }
   /* Here we tell the store to use this slice reducer function to handle all updates to that state.

   we named it counter - like the name of the slice, we could write here any name, but in big apps, if we use another name then in the slice, it will be difficult to understatnd what a slice reducer is it. */


   /*___ if we imported the slice with name  "counter", we could write store like this

      reducer: {
         couter      // short of    couter:counter
      }
      
   ___*/

})