import { createAsyncThunk } from '@reduxjs/toolkit'

import { requestCourses } from '../../servises/courses'

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await requestCourses()

  return response
})
