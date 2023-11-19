import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import lessonSettingsSlice from "./slices/lessonSettingsSlice";
import wordsSlice from "./slices/wordsSlice";
import lessonSlice from "./slices/lessonSlice";
import userSlice from "./slices/userSlice";
import dashboardSlice from "./slices/dashboardSlice";

export const store = configureStore({
   reducer: {
      words: wordsSlice,
      search: searchSlice,
      lessonSettings: lessonSettingsSlice,
      lesson: lessonSlice,
      user: userSlice,
      dashboard: dashboardSlice
   },
})

