import { client } from '../utils/client'
import { coursesEndpoints } from '../api'

export const requestCourses = async () => {
   const { data } = await client.get(coursesEndpoints)

   return data
}