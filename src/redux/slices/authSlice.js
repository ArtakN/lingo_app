// Import necessary libraries
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, getAdditionalUserInfo } from 'firebase/auth';
import { auth, provider } from "../../firebase";

// Async thunk for handling Google login
export const logInWithGoogle = createAsyncThunk(
   'auth/logInWithGoogle',
   async () => {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      const isNewUser = getAdditionalUserInfo(result).isNewUser
      const { uid, displayName, email, photoURL } = user;
      return { uid, displayName, email, photoURL, isNewUser };
   }
);

const initialState = {
   currentUser: JSON.parse(localStorage.getItem('user')) || null,
   isNewUser: null
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logOut: (state) => { state.currentUser = null }
   },
   extraReducers: (builder) => {
      builder.addCase(logInWithGoogle.fulfilled, (state, action) => {
         localStorage.setItem('user', JSON.stringify(action.payload))
         state.currentUser = JSON.parse(localStorage.getItem('user'))
         state.isNewUser = action.payload.isNewUser;
      });
      // ... handle other actions ...
   },
});

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer;
