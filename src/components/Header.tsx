import Link from 'next/link'
import Image from 'next/image'
import { VscGithubInverted } from 'react-icons/vsc'
import ThemeSwitch from '@/utils/ThemeSwitch'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mb-8 flex max-h-16 items-center justify-around border-b border-light-sur_var bg-neutral-300/20 py-4 backdrop-blur dark:border-dark-sur_var dark:bg-neutral-600/20">
      <Link href="/" className="relative h-6 w-36">
        <Image
          src="/logo-light.svg"
          alt="Bluish logotype"
          quality={100}
          className="invisible dark:visible"
          priority
          fill
        />
        <Image
          src="/logo-dark.svg"
          alt="Bluish logotype"
          quality={100}
          className="visible dark:invisible"
          priority
          fill
        />
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/docs/getting-started/installation" className="hover:text-light-pri dark:hover:text-dark-pri">
          Documentation
        </Link>
        <a href="/#about" className="hover:text-light-pri dark:hover:text-dark-pri">
          About
        </a>
        <span className="h-6 w-[1px] bg-light-outline bg-opacity-50 dark:bg-dark-outline dark:bg-opacity-50" />
        <ThemeSwitch />
        <a
          href="https://github.com/classiuz/bluish"
          className="text-xl text-light-on_sur_var hover:text-light-pri dark:text-dark-on_sur_var dark:hover:text-dark-pri"
        >
          <VscGithubInverted />
        </a>
      </div>
    </header>
  )
}
