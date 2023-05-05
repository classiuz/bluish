import { allData } from 'contentlayer/generated'
import { getOneArticle, getPrevNextArticle } from '@/data/getData'
import { useMDXComponent } from 'next-contentlayer/hooks'
import PageNavigation from '@/components/PageNavigation'

import { VscGithubInverted } from 'react-icons/vsc'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export async function getStaticPaths() {
  const paths = allData.map((post) => ({
    params: {
      category: post._raw.flattenedPath.split('/')[0],
      article: post._raw.flattenedPath.split('/')[1],
    },
  }))

  return { paths, fallback: false }
}

interface Props {
  params: {
    category: string
    article: string
  }
}

export async function generateMetadata({ params }: Props) {
  const { article } = getOneArticle(params.category, params.article)
  return {
    title: `${article.title} - Bluish`,
    description: article.description,
  }
}

export default function Article({ params }: Props) {
  const { category, article } = getOneArticle(params.category, params.article)
  const { prev, next } = getPrevNextArticle(category, article)
  const MDXContent = useMDXComponent(article.body)

  return (
    <div className="flex w-full flex-col gap-2">
      <PageNavigation path={[params.category, params.article]} />

      <h1 className="text-2xl font-semibold">{article.title}</h1>
      <p className="px-2 text-lg text-light-on_sur_var/90 dark:text-dark-on_sur_var/90">{article.description}</p>

      <MDXContent />

      <div className="mt-4 flex w-full items-center justify-between text-light-on_sur_var/70 dark:text-dark-on_sur_var/70">
        {prev.available ? (
          <a
            href={prev?.url}
            className="inline-flex w-1/3 items-center justify-start gap-2 text-2xl hover:text-light-pri dark:hover:text-dark-pri"
          >
            <span>
              <MdArrowBack />
            </span>
            <p className="text-base">{prev?.title}</p>
          </a>
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
        {next.available ? (
          <a
            href={next?.url}
            className="inline-flex w-1/3 items-center justify-end gap-2 text-2xl hover:text-light-pri dark:hover:text-dark-pri"
          >
            <p className="text-base">{next?.title}</p>
            <span>
              <MdArrowForward />
            </span>
          </a>
        ) : (
          <span className="w-1/3" />
        )}
      </div>
    </div>
  )
}
