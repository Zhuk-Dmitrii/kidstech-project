import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from '../router'
import { store } from '../redux/store'
import '../assets/scss/index.scss'

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
