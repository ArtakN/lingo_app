import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   learnWords: []
}

const learnSlice = createSlice({
   name: 'learn',
   initialState,
   reducers: {
      setLearnWords: (state, action) => {
         state.learnWords = action.payload
      }
   }
})

export const { setLearnWords } = learnSlice.actions
export default learnSlice.reducer