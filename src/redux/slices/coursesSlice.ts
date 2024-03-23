import { createSlice } from '@reduxjs/toolkit'

import { TInitialState } from '../types/types'
import { coursesSelectors } from '../selectors/selectors'
import { fetchCourses } from '../thunks/thunks'

const initialState: TInitialState = {
  data: [],
  loading: false,
  error: null,
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
  selectors: coursesSelectors,
})

export const coursesReducer = coursesSlice.reducer
export const { selectData, selectError, selectLoading } = coursesSlice.selectors
