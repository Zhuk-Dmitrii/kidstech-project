import { setActiveTag } from '../../redux/coursesSlice'
import { useAppDispatch } from '../../redux/store'
import style from './navLinkItem.module.scss'

type Props = {
   value: string,
   active: boolean,
}

export function NavLinkItem({ value, active }: Props) {
   const dispatch = useAppDispatch()

   function handleClick() {
      dispatch(setActiveTag(value))
   }

   return (
      <li className={`${style.navItem} ${active ? style.active : ''}`} onClick={handleClick}>
         <a href="#">{value}</a>
      </li>
   )
}