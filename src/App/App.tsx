// libraries
import { Provider } from 'react-redux'
// components
import { Layout } from '../components/Layout'
// store
import { store } from '../redux/store'
// styles
import '../assets/scss/index.scss'

export function App() {
   return (
      <Provider store={store}>
         <Layout />
      </Provider>
   )
}