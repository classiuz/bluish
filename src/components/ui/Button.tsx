import React from 'react'
import { MdCircle } from 'react-icons/md'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'classic' | 'outline'
  children: React.ReactNode
}

export default function Button({ styleType = 'classic', children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-1 rounded-lg border border-transparent px-4 py-2 ${
        styleType === 'classic'
          ? 'bg-light-pri-cont text-light-pri-on_cont hover:shadow-lvl1 dark:bg-dark-pri-cont dark:text-dark-pri-on_cont'
          : 'border-light-pri text-light-pri dark:border-dark-pri dark:text-dark-pri'
      }`}
    >
      {children}
    </button>
  )
}

interface SwitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  conditional: boolean
}

export function SwitchButton({ conditional, ...rest }: SwitchButtonProps) {
  return (
    <span
      className={`cursor-pointer rounded-full border px-1 shadow-lvl1 hover:shadow-lvl2 ${
        conditional
          ? 'border-light-pri-cont bg-light-pri-cont dark:border-dark-pri-cont dark:bg-dark-pri-cont'
          : 'border-light-outline bg-light-sur_var dark:border-dark-outline dark:bg-dark-sur_var'
      }`}
    >
      <button {...rest} className="flex h-5 w-7 items-center disabled:opacity-20">
        <MdCircle
          className={`transition-transform
            ${
              conditional
                ? 'translate-x-3 text-lg text-light-pri-on_cont dark:text-dark-pri'
                : 'text-sm text-light-on_sur_var dark:text-dark-on_sur_var'
            }`}
        />
      </button>
    </span>
  )
}
