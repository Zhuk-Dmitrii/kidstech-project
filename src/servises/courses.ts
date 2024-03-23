import { client } from './client'
import { coursesEndpoints } from './api'
import { ICourses } from '../types/interfaces'

export const requestCourses = async () => {
   const { data } = await client.get<ICourses[]>(coursesEndpoints)

   return data
}