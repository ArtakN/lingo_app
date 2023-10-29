import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentUser: JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state) => { state.currentUser = JSON.parse(localStorage.getItem('user')) },
      removeUser: (state) => { state.currentUser = null }
   }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer