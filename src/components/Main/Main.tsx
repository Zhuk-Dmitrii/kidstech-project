// components
import { Container } from '../Container'
import { Card } from '../Card'
// styles
import style from './main.module.scss'

export function Main() {
   return (
      <div className={style.main}>
         <Container className={style.containerCourses}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </Container>
      </div>
   )
}
