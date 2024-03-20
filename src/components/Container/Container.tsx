type Props = {
   className: CSSModuleClasses[string],
   children: React.ReactNode
}

export function Container({ className, children }: Props) {
   return (
      <div className={className}>
         {children}
      </div>
   )
}