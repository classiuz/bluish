import Link from 'next/link'
import getData, { getAllArticles } from '@/data/getData'
import regExp from '@/utils/regExp'
import PageNavigation from '@/components/PageNavigation'
import { MdArrowForwardIos } from 'react-icons/md'

export async function generateStaticParams() {
  return getData().map(({ category }) => ({
    category: regExp(category),
  }))
}

interface Props {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props) {
  const { category } = getAllArticles(params.category)
  return {
    title: `${category} - Bluish`,
    description: `List of all articles for category ${category}.`,
  }
}

export default function Category({ params }: Props) {
  const { category, articles } = getAllArticles(params.category)

  return (
    <>
      <div className="flex w-[60%] flex-col gap-2 pb-4">
        <article className="flex flex-col justify-between gap-4">
          <div className="flex w-full flex-col gap-2">
            <PageNavigation path={[params.category]} />
            <h1 className="text-2xl font-semibold">{category}</h1>
            <p className="px-2 text-lg text-light-on_sur_var/90 dark:text-dark-on_sur_var/90">
              List of all articles for category {category}.
            </p>

            <ul className="mt-6 grid grid-cols-2 place-items-center gap-4">
              {articles.map((article, index) => {
                return (
                  <Link
                    key={index}
                    href={article.status ? '/' : article.url}
                    className={`group relative flex flex-col gap-3 rounded-md border border-light-outline bg-light-sur_var px-6 py-4 dark:border-dark-outline dark:bg-dark-sur_var ${
                      article.status
                        ? 'pointer-events-none opacity-50'
                        : 'opacity-100 hover:cursor-pointer hover:border-light-pri/80 hover:bg-light-pri/40 dark:hover:border-dark-pri/80 dark:hover:bg-dark-pri/40'
                    }`}
                  >
                    <h1 className="text-lg">{article.title}</h1>
                    <p className="line-clamp-2 text-light-on_sur_var/90 dark:text-dark-on_sur_var/90">
                      {article.description}
                    </p>
                    <span className="absolute bottom-4 right-4 transition-transform group-hover:translate-x-1">
                      <MdArrowForwardIos />
                    </span>
                  </Link>
                )
              })}
            </ul>
          </div>
        </article>
      </div>
      <div className="w-[20%]" />
    </>
  )
}
