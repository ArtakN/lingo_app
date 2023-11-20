import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const updateVocabulary = createAsyncThunk(
   'lesson/updateVocabulary',
   async ({ userId, correctWords }) => {
      // Creating a reference to the document in Firestore
      const docRef = doc(db, "vocabulary", userId);
      // Updating the document
      await updateDoc(docRef, { learnedWords: arrayUnion(...correctWords) });
   }
);

const initialState = {
   lessonWords: [],
   correctWords: [],
   incorrectWords: []
}

const lessonSlice = createSlice({
   name: 'lesson',
   initialState,
   reducers: {
      setLearnWords: (state, action) => {
         state.lessonWords = action.payload
      },
      setCorrectWords: (state, action) => {
         state.correctWords = action.payload
      },
      setIncorrectWords: (state, action) => {
         state.incorrectWords = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(updateVocabulary.pending, (state, action) => {
            // handle the state when updateVocabulary is pending
         })
         .addCase(updateVocabulary.fulfilled, (state, action) => {
            // handle the state when updateVocabulary is fulfilled
         })
         .addCase(updateVocabulary.rejected, (state, action) => {
            // handle the state when updateVocabulary is rejected
         });
   }
})

export const { setLearnWords, setCorrectWords, setIncorrectWords } = lessonSlice.actions
export default lessonSlice.reducer