import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   wordsCount: 10,
   languageLevel: '',
}

const settingsSlice = createSlice({
   name: 'settings',
   initialState: initialState,
   reducers: {
      setWordsCount: (state, action) => {
         state.wordsCount = action.payload
      },
      setLanguageLevel: (state, action) => {
         state.languageLevel = action.payload
      }
   }
})

export const { setWordsCount, setLanguageLevel } = settingsSlice.actions
export default settingsSlice.reducer