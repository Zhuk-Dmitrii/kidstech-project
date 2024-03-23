import { configureStore } from '@reduxjs/toolkit'

import { coursesReducer } from './slices/coursesSlice'

export const store = configureStore({
   reducer: {
      courses: coursesReducer,
   }
})