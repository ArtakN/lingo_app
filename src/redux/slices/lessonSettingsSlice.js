import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchLessonSettings = createAsyncThunk(
   'lessonSettings/fetchByUserId',
   async (userId) => {
      const docRef = doc(db, "lessonSettings", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
         return docSnap.data(); // This will be passed as the `action.payload` parameter in the extraReducers field.
      } else {
         throw new Error("No such document!");
      }
   }
);

const initialState = {
   wordsCount: 0,
   modules: {
      All: false,
      A11: false,
      A12: false,
      A21: false,
      A22: false,
      B11: false,
      B12: false
   },
   exerciseTypes: {
      choose: true,
      listen: false,
      speak: false,
      write: false
   }
}

const lessonSettingsSlice = createSlice({
   name: 'lessonSettings',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder.addCase(fetchLessonSettings.pending, (state) => {
         state.loading = 'Is pending...';
      }).addCase(fetchLessonSettings.fulfilled, (state, action) => {
         state.wordsCount = action.payload.wordsCount;
         state.modules = action.payload.modules;
         state.exerciseTypes = action.payload.exerciseTypes;
      }).addCase(fetchLessonSettings.rejected, (state, action) => {
         // handle error here
         console.error('Failed to fetch lesson settings:', action.error);
      });
   },
})

export default lessonSettingsSlice.reducer