interface Props extends React.HTMLAttributes<HTMLDivElement> {
  styleType?: 'elevated' | 'filled' | 'outline'
  className?: string
  children: JSX.Element | string
}

function Card({ styleType = 'elevated', className, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={`${className} h-full w-full rounded-lg border p-8 shadow-lvl1
      ${styleType === 'elevated' && 'border-transparent bg-light-sur dark:bg-dark-sur'}
      ${styleType === 'filled' && 'border-transparent bg-light-pri-cont dark:bg-dark-pri-cont'}
      ${styleType === 'outline' && 'border-light-outline dark:border-dark-outline'}`}
    >
      {children}
    </div>
  )
}

export default Card
