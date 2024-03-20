// components
import { NavLinkItem } from '../NavLinkItem'
// styles
import style from './sidebar.module.scss'

export function Sidebar() {
   return (
      <div className={style.sidebar}>
         <ul className={style.sidebarItems}>
            <NavLinkItem
               className={style.sidebarItem}
               children={'Все темы'}
            />
            <NavLinkItem
               className={style.sidebarItem}
               children={'Логика и мышление'}
            />
            <NavLinkItem
               className={style.sidebarItem}
               children={'Загадки'}
            />
            <NavLinkItem
               className={style.sidebarItem}
               children={'Головоломки'}
            />
            <NavLinkItem
               className={style.sidebarItem}
               children={'Путешествия'}
            />
         </ul>
      </div>
   )
}