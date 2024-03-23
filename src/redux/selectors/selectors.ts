import { TInitialState } from '../types/types'

export const coursesSelectors = {
  selectLoading: (state: TInitialState) => state.loading,
  selectError: (state: TInitialState) => state.error,
  selectData: (state: TInitialState) => state.data,
}
