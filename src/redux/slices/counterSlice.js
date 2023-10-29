import { createSlice } from "@reduxjs/toolkit";

const initalState = {
   value: 0
}

export const counterSlice = createSlice(
   {
      name: 'counter',
      initialState: initalState,
      reducers: {
         increment: (state) => {
            state.value++
         },
         decrement: (state) => {
            state.value--
         },
         decrementInputedValue: (state, action) => {
            state.value = state.value + action.payload
         }
      }
   }
)
export const { increment, decrement, decrementInputedValue } = counterSlice.actions
export default counterSlice.reducer