import Link from 'next/link'
import normalizeName from '@/utils/normalizeName'
import { MdArrowForwardIos } from 'react-icons/md'

interface Props {
  path: string[]
}

export default function PageNavigation({ path }: Props) {
  return (
    <ol className="inline-flex items-center gap-2 text-lg text-light-on_sur_var/50 dark:text-dark-on_sur_var/50">
      <li className="hover:text-light-on_sur_var/80 dark:hover:text-dark-on_sur_var/80">
        <Link href="/docs/getting-started/installation">Documentation</Link>
      </li>
      {path.map((current, index) => {
        return (
          <>
            <span key={index} className="text-xs">
              <MdArrowForwardIos />
            </span>
            <li className="hover:text-light-on_sur_var/80 dark:hover:text-dark-on_sur_var/80">
              <Link href={`/docs/${index >= 1 ? path.join('/') : current}`}>
                {normalizeName(current)}
              </Link>
            </li>
          </>
        )
      })}
    </ol>
  )
}
