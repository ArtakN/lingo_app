import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import searchSlice from "./slices/searchSlice";
import settingsSlice from "./slices/settingsSlice";
import wordsSlice from "./slices/wordsSlice";
import learnSlice from "./slices/learnSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
   reducer: {
      words: wordsSlice,
      counter: counterReducer,
      search: searchSlice,
      settings: settingsSlice,
      learn: learnSlice,
      user: userSlice,
   },
})

