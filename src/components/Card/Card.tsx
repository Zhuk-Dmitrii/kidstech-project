import { ICourses } from '../../types/interfaces'
import style from './card.module.scss'

type TProps = {
  course: ICourses
}

export function Card({ course }: TProps) {
  const { bgColor, name, image } = course

  return (
    <div className={style.card}>
      <div className={style.cardImage} style={{ background: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <h4 className={style.cardTitle}>{name}</h4>
    </div>
  )
}
