import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectData, selectLoading } from '../../redux/slices/coursesSlice'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { fetchCourses } from '../../redux/thunks/thunks'
import { Container } from '../../components/Container'
import { Card } from '../../components/Card'
import { Spinner } from '../../components/Spinner'
import style from '../../components/Container/container.module.scss'

export function Courses() {
  const dispatch = useAppDispatch()
  const { coursesName } = useParams<{ coursesName: string }>()
  const courses = useSelector(selectData)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  const renderCards = () => {
    const filteredCourses =
      coursesName === 'Все темы'
        ? courses
        : courses.filter((course) => course.tags.some((tag) => tag === coursesName))

    return filteredCourses.map((course) => <Card key={course.id} course={course} />)
  }

  if (loading) {
    return <Spinner />
  }

  return <Container className={style.containerCourses}>{renderCards()}</Container>
}
