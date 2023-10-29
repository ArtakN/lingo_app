/***  When we use React Redux, we will write our bussines logic in Redux using 
      asyncronous actions. 
  
      In no case, inside redux we shouldn't create any side effects, like console.log, alert, any window action (like: window.scrall(0, 0)). 
      we will write it in UI (components).

      we will create asyncronous actions with createAsyncThunk() function of RTK. It let us to create a request, dispatchs, some redux actions in one function. 

   in the slice folder we crete a pizzaSlice.js file and in it we create a asyncronous action and call it fetchPizzas and replace bussines logic from component to here.
   createAsyncThunk() means that it is a asyncronous fanction. */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchPizzas = createAsyncThunk(
   'pizzas/fetchPizzasStatus',
   async () => {
      const { data } = await axios.get(
         `https://`
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
   }
})

extraReducers: {
   // if it is pending - we show loading, and 
   [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
   },
      // if it is confirmed - we show success and 
      [fetchPizzas.fulfilled]: (state, action) => {
         state.status = action.payload
         state.items = 'success'
      },
         // if it is rejected - we show error and clean pizzas
         [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error'
            state.items = []
         }
}

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
// =============================================================================

// =============================================================================
/* thunkAPI is an additional utility th createAsyncThunk

   thunkAPI is an object   */ 




// =============================================================================