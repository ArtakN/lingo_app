import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Asyncronous thunk for setting inital data for a new user
export const initializeNewUser = createAsyncThunk(
   'user/initializeNewUser',
   async ({ userId, user }) => {
      try {
         // Add "vocabualry" collection for a new user
         setDoc(doc(db, "vocabulary", userId), {
            learnedWords: [],
         });
         // Add "lessonSettings" collection for a new user
         setDoc(doc(db, "lessonSettings", userId), {
            wordsCount: 10,
            modules: {
               All: false,
               A11: false,
               A12: false,
               A21: false,
               A22: false,
               B11: false,
               B12: false,
               B21: false,
               B22: false
            },
            exerciseTypes: {
               choose: true,
               listen: false,
               write: false,
               speak: false
            }
         });
         // Add "userProfile" collection for a new user
         setDoc(doc(db, "userProfile", userId), {
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
         });
      } catch (error) {
         console.log(error)
      }
   }
);

const initialState = {
   currentUser: JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state) => { state.currentUser = JSON.parse(localStorage.getItem('user')) },
      removeUser: (state) => { state.currentUser = null }
   },
   extraReducers: (builder) => {
      builder
         .addCase(initializeNewUser.pending, (state, action) => {
            // handle the state when initializeNewUser is pending
         })
         .addCase(initializeNewUser.fulfilled, (state, action) => {
            // handle the state when initializeNewUser is fulfilled
         })
         .addCase(initializeNewUser.rejected, (state, action) => {
            // handle the state when initializeNewUser is rejected
         });
   }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer