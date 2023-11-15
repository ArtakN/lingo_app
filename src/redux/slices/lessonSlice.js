import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateVocabulary = createAsyncThunk(
   'lesson/updateVocabulary',
   async ({ userId, correctWords, incorrectWords }) => {
      // Creating a reference to the document in Firestore
      const docRef = doc(db, "vocabulary", userId);
      // Updating the document
      await updateDoc(docRef, { learnedWords: correctWords, wordsToRepeat: incorrectWords });
   }
);

const initialState = {
   learnWords: [],
   correctWords: [],
   incorrectWords: []
}

const lessonSlice = createSlice({
   name: 'lesson',
   initialState,
   reducers: {
      setLearnWords: (state, action) => {
         state.learnWords = action.payload
      },
      setCorrectWords: (state, action) => {
         state.correctWords = action.payload
      },
      setIncorrectWords: (state, action) => {
         state.incorrectWords = action.payload
      }
   },
   extraReducers: {
      [updateVocabulary.pending]: (state, action) => {
         // handle the state when updateVocabulary is pending
      },
      [updateVocabulary.fulfilled]: (state, action) => {
         // handle the state when updateVocabulary is fulfilled
      },
      [updateVocabulary.rejected]: (state, action) => {
         // handle the state when updateVocabulary is rejected
      }
   }
})

export const { setLearnWords, setCorrectWords, setIncorrectWords } = lessonSlice.actions
export default lessonSlice.reducer