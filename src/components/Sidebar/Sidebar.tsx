import { useAppSelector } from '../../redux/store'
import { NavLinkItem } from '../NavLinkItem'
import style from './sideBar.module.scss'

export function Sidebar() {
   const data = useAppSelector(state => state.courses.data)

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
               value={'Все темы'}
            />
            {renderNavLinkItem()}
         </ul>
      </div>
   )
}