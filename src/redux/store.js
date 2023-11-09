import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import lessonSettingsSlice from "./slices/lessonSettingsSlice";
import wordsSlice from "./slices/wordsSlice";
import learnSlice from "./slices/learnSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
   reducer: {
      words: wordsSlice,
      search: searchSlice,
      lessonSettings: lessonSettingsSlice,
      learn: learnSlice,
      user: userSlice,
   },
})

