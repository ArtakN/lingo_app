import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchVocabulary = createAsyncThunk(
   'dashboard/fetchByUserId',
   async (userId) => {
      const docRef = doc(db, "vocabulary", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
         return docSnap.data();
      } else {
         throw new Error("No such document!")
      }
   }
)

const initialState = {
   learnedWords: [],
}

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchVocabulary.fulfilled, (state, action) => {
         state.learnedWords = action.payload.learnedWords;
      });
   }
})

export default dashboardSlice.reducer