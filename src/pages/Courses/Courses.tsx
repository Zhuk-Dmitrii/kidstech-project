import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchCourses } from '../../redux/coursesSlice'
import { Container } from '../../components/Container'
import { Card } from '../../components/Card'
import { Spinner } from '../../components/Spinner'
import style from '../../components/Container/container.module.scss'

export function Courses() {
   const { coursesName } = useParams()
   const { data } = useAppSelector((state) => state.courses)
   const { loading } = useAppSelector((state) => state.courses)
   const dispatch = useAppDispatch()

   console.log(coursesName)

   useEffect(() => {
      dispatch(fetchCourses())
   }, [dispatch])

   function renderCards() {
      if (coursesName == 'Все темы') {
         return data.map((item) => {
            return <Card key={item.id} data={item} />
         })
      }

      const filteredData = data.filter((item) => {
         return item.tags.some(item => item == coursesName)
      })

      return filteredData.map((item) => {
         return <Card key={item.id} data={item} />
      })
   }

   if (loading) {
      return (
         <Spinner />
      )
   }

   return (
      <>
         <Container className={style.containerCourses}>
            {renderCards()}
         </Container>
      </>
   )
}
