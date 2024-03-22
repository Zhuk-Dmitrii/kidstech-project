import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { Main } from '../Main'
import style from './layout.module.scss'

export function Layout() {
   return (
      <div className={style.layout}>
         <Sidebar />
         <Main>
            <Outlet />
         </Main>
      </div>
   )
}