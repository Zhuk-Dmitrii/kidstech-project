type Props = {
   className: CSSModuleClasses[string],
   children: React.ReactNode
}

export function NavLinkItem({ className, children }: Props) {
   return (
      <li className={className}>
         <a href="#">{children}</a>
      </li>
   )
}