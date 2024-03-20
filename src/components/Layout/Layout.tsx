// components
import { Sidebar } from '../Sidebar'
import { Main } from '../Main'
// styles
import style from './layout.module.scss'

export function Layout() {
   return (
      <div className={style.layout}>
         <Sidebar />
         <Main />
      </div>
   )
}