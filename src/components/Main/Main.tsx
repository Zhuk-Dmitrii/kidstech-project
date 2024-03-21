// libraries
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// store
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchCourses } from '../../redux/coursesSlice'
// components
import { Container } from '../Container'
import { Card } from '../Card'
// styles
import style from './main.module.scss'

export function Main() {
   const { data } = useSelector((state: RootState) => state.courses)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchCourses())
   }, [dispatch])

   function renderCards() {
      if (data) {
         return data.map((item) => {
            return <Card key={item.id} data={item} />
         })
      }
   }

   return (
      <div className={style.main}>
         <Container className={style.containerCourses}>
            {renderCards()}
         </Container>
      </div>
   )
}
