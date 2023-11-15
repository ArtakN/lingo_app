// Importing necessary functions from Redux Toolkit and Firebase Firestore
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Asynchronous thunk for fetching words from Firestore
export const fetchWords = createAsyncThunk(
   'words/fetchedWords',
   async () => {
      // Fetching all documents from the 'words' collection
      const querySnapshot = await getDocs(collection(db, "words"));
      const words = [];
      const modules = [{ name: 'All', module: {} }]; // add an 'All' module
      // Looping through each document
      querySnapshot.forEach((doc) => {
         const moduleData = doc.data();
         // Looping through each field in the document
         for (let field in moduleData) {
            const word = moduleData[field];
            words.push(word);
            modules[0].module[field] = word; // add the word to the 'All' module
         }
         // Adding the document data to the modules array
         modules.push({ name: doc.id, module: moduleData });
      });
      // Returning the words and modules arrays
      return { words, modules };
   }
);

// Initial state of the words
const initialState = {
   allWords: [],
   modules: [],
   loading: false, // add loading state
   error: null // add error state
}

// Slice of the Redux store for managing words
const wordsSlice = createSlice({
   name: 'words',
   initialState,
   reducers: {},
   // Extra reducers for handling the different states of the async thunk
   extraReducers: (builder) => {
      builder.addCase(fetchWords.pending, (state) => {
         // When the fetch is pending
         state.loading = true;
      });
      builder.addCase(fetchWords.fulfilled, (state, action) => {
         // When the fetch is successful
         state.allWords = action.payload.words;
         state.modules = action.payload.modules;
         state.loading = false;
      });
      builder.addCase(fetchWords.rejected, (state, action) => {
         // When the fetch fails
         state.loading = false;
         state.error = action.error.message;
      });
   },
})

// Exporting the reducer
export default wordsSlice.reducer;
