import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import lessonSettingsSlice from "./slices/lessonSettingsSlice";
import wordsSlice from "./slices/wordsSlice";
import lessonSlice from "./slices/lessonSlice";
import newUserSlice from "./slices/newUserSlice";
import dashboardSlice from "./slices/dashboardSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
   reducer: {
      words: wordsSlice,
      search: searchSlice,
      lessonSettings: lessonSettingsSlice,
      lesson: lessonSlice,
      newUser: newUserSlice,
      dashboard: dashboardSlice,
      auth: authSlice
   },
})

