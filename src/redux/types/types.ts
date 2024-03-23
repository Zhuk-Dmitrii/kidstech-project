import { ICourses } from '../../types/interfaces'
import { store } from '../store'

export type TInitialState = {
  data: ICourses[]
  loading: boolean
  error: null | string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
