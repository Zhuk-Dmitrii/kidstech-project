import { useSelector } from 'react-redux'

import { NavLinkItem } from '../NavLinkItem'
import style from './sideBar.module.scss'
import { selectData } from '../../redux/slices/coursesSlice'

export function Sidebar() {
  const courses = useSelector(selectData)

  function renderNavLinkItems() {
    if (courses) {
      const allTags = courses.flatMap(({ tags }) => tags)
      const uniqueTags = Array.from(new Set(allTags))

      return uniqueTags.map((tag) => <NavLinkItem key={tag} value={tag} />)
    }
  }

  return (
    <div className={style.sidebar}>
      <ul className={style.sidebarItems}>
        <NavLinkItem value={'Все темы'} />
        {renderNavLinkItems()}
      </ul>
    </div>
  )
}
