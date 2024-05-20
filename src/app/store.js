import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "../features/videos/VideosSlice";
import counterReducer from '../features/counter/counterSlice'
{/*

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { videosSlice } from '../features/videos/VideosSlice'
//import { videosSlice } from '../features/videos/VideosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos : videosSlice
    // videos: videosSlice
  },
})
*/}


export const store = configureStore({
    reducer: {
      counter: counterReducer,
      videos: videosSlice
    }
})