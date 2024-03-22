import style from './main.module.scss'

type TProps = {
   children: React.ReactNode
}

export function Main({ children }: TProps) {
   return (
      <div className={style.main}>
         {children}
      </div>
   )
}
