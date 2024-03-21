import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestCourses } from '../servises/courses'
import { ICourses } from '../types/interfaces'

type TState = {
   data: ICourses[],
   activeTag: string,
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
      activeTag: 'Все темы',
      loading: false,
      error: null
   } as TState,
   reducers: {
      setActiveTag: (state, action) => {
         state.activeTag = action.payload;
      }
   },
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

export const { setActiveTag } = coursesSlice.actions
export const coursesReducer = coursesSlice.reducer