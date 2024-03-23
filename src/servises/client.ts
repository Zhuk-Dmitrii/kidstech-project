import axios from 'axios'

export const client = axios.create({
   baseURL: 'https://logiclike.com/',
   timeout: 10000,
})