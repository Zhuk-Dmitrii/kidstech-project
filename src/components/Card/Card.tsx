// styles
import style from './card.module.scss'

export function Card() {
   return (
      <div className={style.card}>
         <div className={style.cardImage}>
            <img src="https://s3.logiclike.com/s3/logic-training/side-courses/files/MkHAmnYuhotzMc91WydqA7dkFrVPO3KoclrIJX2O.png" alt="шахматы" />
         </div>
         <h4 className={style.cardTitle}>Шахматы. Опытный</h4>
      </div>
   )
}