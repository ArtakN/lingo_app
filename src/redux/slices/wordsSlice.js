import { createSlice } from "@reduxjs/toolkit";
import { allWords, modules } from "../../data";

const initialState = {
   allWords,   //short of   allWord: allWords
   modules,
}

const wordsSlice = createSlice({
   name: 'words',
   initialState,  //short of   initialState: initialState
   reducers: {}
})

export default wordsSlice.reducer