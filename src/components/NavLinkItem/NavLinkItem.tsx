type Props = {
   className: CSSModuleClasses[string],
   value: string
}

export function NavLinkItem({ className, value }: Props) {
   return (
      <li className={className}>
         <a href="#">{value}</a>
      </li>
   )
}