import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Courses } from './pages/Courses'

export const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Navigate to='/courses/все книги' replace/>
         },
         {
            path: '/courses/:coursesName',
            element: <Courses />
         }
      ]
   }
])