import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Asynchronous thunk for fetching lesson settings from Firestore
export const fetchLessonSettings = createAsyncThunk(
   'lessonSettings/fetchByUserId',
   async (userId) => {
      // Creating a reference to the document in Firestore
      const docRef = doc(db, "lessonSettings", userId);
      // Fetching the document
      const docSnap = await getDoc(docRef);

      // If the document exists, return its data
      if (docSnap.exists()) {
         return docSnap.data(); // This will be passed as the `action.payload` parameter in the extraReducers field.
      } else {
         // If the document does not exist, throw an error
         throw new Error("No such document!");
      }
   }
);

// Asynchronous thunk for updating lesson settings in Firestore
export const updateLessonSettings = createAsyncThunk(
   'lessonSettings/updateByUserId',
   async ({ userId, newSettings }) => {
      // Creating a reference to the document in Firestore
      const docRef = doc(db, "lessonSettings", userId);
      // Updating the document
      await updateDoc(docRef, newSettings);
   }
);

// Initial state of the lesson settings
const initialState = {
   wordsCount: 0,
   modules: {
   },
   exerciseTypes: {
   },
   loading: false, // add loading state
   error: null // add error state
}

// Slice of the Redux store for managing lesson settings
const lessonSettingsSlice = createSlice({
   name: 'lessonSettings',
   initialState,
   reducers: {},
   // Extra reducers for handling the different states of the async thunk
   extraReducers: (builder) => {
      builder.addCase(fetchLessonSettings.pending, (state) => {
         // When the fetch is pending
         state.loading = true;
      }).addCase(fetchLessonSettings.fulfilled, (state, action) => {
         // When the fetch is successful
         state.wordsCount = action.payload.wordsCount;
         state.modules = action.payload.modules;
         state.exerciseTypes = action.payload.exerciseTypes;
         state.loading = false;
      }).addCase(fetchLessonSettings.rejected, (state, action) => {
         // When the fetch fails
         state.loading = false;
         state.error = action.error.message;
      }).addCase(updateLessonSettings.fulfilled, (state, action) => {
         // When the update is successful
         state.wordsCount = action.payload.wordsCount;
         state.modules = action.payload.modules;
         state.exerciseTypes = action.payload.exerciseTypes;
         state.loading = false;
      });
   },
})

export default lessonSettingsSlice.reducer
