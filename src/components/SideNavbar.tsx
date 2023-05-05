'use client'
import { usePathname } from 'next/navigation'

export default function SideNavbar() {
  const pathname = usePathname()

  const arr = ['Overview', 'Types and Props', 'Tips and tricks', 'Special thanks']

  return (
    <div className="sticky top-[calc(64px+2rem)] flex h-[calc(100vh-64px-2rem)] w-[20%] flex-col gap-2 text-light-on_sur_var dark:text-dark-on_sur_var">
      <p className="text-lg">In this article</p>
      <ul className="ml-2 flex flex-col">
        {arr.map((arr, index) => {
          const url = `#${arr}`
          return (
            <a
              key={index}
              href={url}
              className={`border-l py-1 pl-4 hover:border-light-sec hover:text-light-sec hover:dark:border-dark-sec hover:dark:text-dark-sec ${
                pathname === url
                  ? 'border-light-sec text-light-sec dark:border-dark-sec dark:text-dark-sec'
                  : 'border-light-on_sur_var/40 text-light-on_sur_var dark:border-dark-on_sur_var/40 dark:text-dark-on_sur_var'
              }`}
            >
              &bull; {arr}
            </a>
          )
        })}
      </ul>
    </div>
  )
}
