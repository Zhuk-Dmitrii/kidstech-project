import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestCourses } from '../servises/courses'
import { ICourses } from '../types/interfaces'

type TState = {
   data: ICourses[],
   loading: boolean,
   error: null | string,
}

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
   const response = await requestCourses()

   return response
})

export const coursesSlice = createSlice({
   name: 'courses',
   initialState: {
      data: [],
      loading: false,
      error: null
   } as TState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchCourses.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchCourses.fulfilled, (state, action) => {
         state.loading = false
         state.data = action.payload
      })

      builder.addCase(fetchCourses.rejected, (state, action) => {
         state.loading = false
         state.error = action.error.message as string
      })
   }
})

export const coursesReducer = coursesSlice.reducer