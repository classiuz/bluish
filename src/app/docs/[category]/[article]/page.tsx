import Link from 'next/link'
import getAllData, { getOneArticle, getPrevNextArticle } from '@/data/getData'
import { useMDXComponent } from 'next-contentlayer/hooks'
import PageNavigation from '@/components/PageNavigation'

import { VscGithubInverted } from 'react-icons/vsc'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export async function generateStaticParams() {
  const allData = getAllData()
  return allData.map(({ path: { category, article } }) => ({
    category,
    article,
  }))
}

interface Props {
  params: {
    category: string
    article: string
  }
}

export async function generateMetadata({ params }: Props) {
  const { title, description } = getOneArticle(`${params.category}/${params.article}`)
  return {
    title: `${title} - Bluish`,
    description: description,
  }
}

export default function Article({ params }: Props) {
  const article = getOneArticle(`${params.category}/${params.article}`)
  const { prev, next } = getPrevNextArticle(`${params.category}/${params.article}`)
  const MDXContent = useMDXComponent(article.body)

  return (
    <div className="flex w-full flex-col gap-2">
      <PageNavigation path={[params.category, params.article]} />

      <h1 className="text-2xl font-semibold">{article.title}</h1>
      <p className="px-2 text-lg text-light-on_sur_var/90 dark:text-dark-on_sur_var/90">{article.description}</p>

      <MDXContent />

      <div className="mt-4 flex w-full items-center justify-between text-light-on_sur_var/70 dark:text-dark-on_sur_var/70">
        {prev ? (
          <Link
            href={prev.url}
            className={`inline-flex w-1/3 items-center justify-start gap-2 text-2xl hover:text-light-pri dark:hover:text-dark-pri ${
              prev.status && 'pointer-events-none text-light-on_sur_var/40 dark:text-dark-on_sur_var/20'
            }`}
          >
            <span>
              <MdArrowBack />
            </span>
            <p className="text-base">{prev.title}</p>
          </Link>
        ) : (
          <span className="w-1/3" />
        )}
        <a
          href={`https://github.com/classiuz/bluish/edit/main/src/app${article.url}.mdx`}
          className="inline-flex w-1/3 items-center justify-center gap-1 text-sm hover:text-light-pri dark:hover:text-dark-pri"
        >
          <p>Edit this page on GitHub</p>
          <span>
            <VscGithubInverted />
          </span>
        </a>
        {next ? (
          <Link
            href={next.url}
            className={`inline-flex w-1/3 items-center justify-end gap-2 text-2xl hover:text-light-pri dark:hover:text-dark-pri ${
              next.status && 'pointer-events-none text-light-on_sur_var/60 dark:text-dark-on_sur_var/20'
            }`}
          >
            <p className="text-base">{next.title}</p>
            <span>
              <MdArrowForward />
            </span>
          </Link>
        ) : (
          <span className="w-1/3" />
        )}
      </div>
    </div>
  )
}
