/***  When we use React Redux, we will write our bussines logic in Redux using 
      asyncronous actions. 
  
      In no case, inside redux we shouldn't create any side effects, like console.log, alert, any window action (like: window.scrall(0, 0)). 
      we need to write these in UI (components).

      In RTK we will create asyncronous actions using createAsyncThunk() function. It lets us to create a request, dispatchs, some redux actions in one function. */

// in pizzaSlice.js we import createAsyncThunk function
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* then we create the thunk, and pass in it some params: 
      -name of the slice (pizzas) / name of the action (fetchPizzasStatus)
      -then we say that we need to do an async request  */
export const fetchPizzas = createAsyncThunk(
   'pizzas/fetchPizzasStatus',
   async () => {
      const { data } = await axios.get(
         `https://...`
      )
      return data
   }
)

const initalState = {
   items: [],
}

const pizzaSlice = createSlice({
   name: 'pizza',
   initalState,
   reucers: {
      setItems(state, action) {
         state.items = action.payload
      },
   },
   /* When we define async thunks using createAsyncThunk, it automatically generates three action types for each async operation: 
      -one for the request (pending) 
      -one for a successful response (fulfilled)
      -one for a failed response (rejected)
   We can then handle these action types in our extraReducers field.

   For example, if we have an async thunk for fetching data from an API, we might handle the .fulfilled action type in our extraReducers to store the received data in our state. Here’s a simplified example:   */
   extraReducers: (builder) => {
      // Add reducers for additional action types here, 
      // the first case - pending is optional, we will handle it if loading state is needed (forr example during data loadin we want to show "Is loading ...")
      builder.addCase(fetchPizzasStatus.pending, (state) => {
         state.loading = 'Is pending...';
      }).addCase(fetchPizzasStatus.fulfilled, (state, action) => {
        // Add user to the state array
        state.entities.push(action.payload)
      }).addCase(fetchPizzasStatus.rejected, (state, action) => {
         // handle error here
         console.error('Failed to fetch lesson settings:', action.error);
      });
   },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer

// -----------------------------------------------------------------------------

// then we can dispatch the thunk from a component
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPizzasStatus } from './fetchPizzasStatus';
// =============================================================================

// =============================================================================
/* thunkAPI is an additional utility of createAsyncThunk

   thunkAPI is an object   */ 




// =============================================================================