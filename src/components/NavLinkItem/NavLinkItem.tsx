import { NavLink } from 'react-router-dom'

import style from './navLinkItem.module.scss'

type TProps = {
   value: string,
}

export function NavLinkItem({ value }: TProps) {
   return (
      <li className={style.navItem} >
         <NavLink to={`courses/${value}`} className={({ isActive }) => isActive ? style.active : ''}>
            {value}
         </NavLink>
      </li>
   )
}