import { ICourses } from '../../types/interfaces'
// styles
import style from './card.module.scss'

type TProps = {
   data: ICourses
}

export function Card({ data }: TProps) {
   return (
      <div className={style.card}>
         <div className={style.cardImage} style={{ background: data.bgColor }}>
            <img src={data.image} alt={data.name} />
         </div>
         <h4 className={style.cardTitle}>{data.name}</h4>
      </div>
   )
}