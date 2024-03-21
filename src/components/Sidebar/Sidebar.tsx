import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { NavLinkItem } from '../NavLinkItem'
import style from './sidebar.module.scss'

export function Sidebar() {
   const { data } = useSelector((state: RootState) => state.courses)

   function renderNavLinkItem() {
      if (data) {
         const tags: string[][] = data.map((item) => item.tags)
         const flatTags: string[] = tags.flat()
         const setTags: Set<string> = new Set(flatTags)
         const result: string[] = Array.from(setTags)

         return result.map(item => {
            return (
               <NavLinkItem
                  key={item}
                  className={style.sidebarItem}
                  value={item}
               />
            )
         })
      }
   }

   return (
      <div className={style.sidebar}>
         <ul className={style.sidebarItems}>
            <NavLinkItem
               className={style.sidebarItem}
               value={'Все темы'}
            />
            {renderNavLinkItem()}
         </ul>
      </div>
   )
}