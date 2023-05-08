'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getAllCategories } from '@/data/getData'
import regExp from '@/utils/regExp'

import { MdLibraryBooks, MdSearch } from 'react-icons/md'

export default function Navbar() {
  const pathname = usePathname()
  const data = getAllCategories()

  return (
    <nav className="sticky top-[calc(64px+2rem)] flex h-[calc(100vh-64px-2rem)] w-[20%] flex-col gap-4">
      <div className="flex items-center justify-center gap-2 rounded-md bg-light-sur_var/60 py-2 text-sm text-light-on_sur_var shadow-sm dark:bg-dark-sur_var/60 dark:text-dark-on_sur_var">
        <span className="mt-[2px] text-lg font-bold">
          <MdSearch />
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-36 bg-transparent text-sm text-light-on_bg placeholder:text-light-on_sur_var dark:text-dark-on_bg dark:placeholder:text-dark-on_sur_var"
        />
        <kbd className="mt-[3px] flex cursor-default gap-1 text-xs font-semibold tracking-wide">
          <abbr title="Control" className="no-underline">
            Ctrl
          </abbr>{' '}
          K
        </kbd>
      </div>
      <div className="scroll ml-1 flex h-full flex-col justify-between overflow-hidden hover:overflow-y-scroll">
        <ul className="flex flex-col gap-6">
          {data.map(({ category, articles }, index) => {
            return (
              <li key={index} className="flex flex-col gap-2">
                <p className="text-xl">
                  <Link href={`docs/${regExp(category)}`}>{category}</Link>
                </p>
                <ul className="ml-2">
                  {articles.map(({ title, status, url }, index) => {
                    return (
                      <Link
                        href={status ? '/' : url}
                        key={index}
                        className={`-ml-px flex w-fit items-center gap-1 border-l py-1 pl-3 hover:border-light-sec hover:text-light-sec dark:hover:border-dark-sec dark:hover:text-dark-sec ${
                          status && 'pointer-events-none text-light-on_sur_var/80 dark:text-dark-on_sur_var/60'
                        } ${
                          pathname === url
                            ? 'border-light-sec text-light-sec dark:border-dark-sec dark:text-dark-sec'
                            : 'border-light-on_sur_var/40 dark:border-dark-on_sur_var/40'
                        }`}
                      >
                        <span>
                          <MdLibraryBooks />
                        </span>
                        <p className="text-lg">{title}</p>
                        {status && (
                          <span className="ml-1 rounded border border-light-on_sur_var/80 px-1 text-xs leading-4 tracking-wide text-light-on_sur_var/80 dark:border-dark-on_sur_var/60 dark:text-dark-on_sur_var/60">
                            {status}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <p className="py-4 italic tracking-wide text-light-on_sur_var/70 dark:text-dark-on_sur_var/50">
          Blüish &bull; v0.0.1
        </p>
      </div>
    </nav>
  )
}
