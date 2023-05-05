import { notFound } from 'next/navigation'
import { allData } from 'contentlayer/generated'
import normalizeName from '../utils/normalizeName'
import sortData from './sortData'
import { type Article } from './types'

const getData = () => {
  return sortData(allData)
}

export default getData

export const getAllArticles = (category: string) => {
  const allData = getData()
  const currentCategory = allData.find((element) => element.category === normalizeName(category))
  if (!currentCategory) notFound()

  return currentCategory
}

export const getOneArticle = (category: string, article: string) => {
  const { category: currentCategory, articles: allArticles } = getAllArticles(category)
  const currentArticle = allArticles.find(({ url }) => url === `/docs/${category}/${article}`)
  if (!currentArticle) notFound()

  return {
    category: currentCategory,
    article: currentArticle,
  }
}

export const getPrevNextArticle = (category: string, article: Article) => {
  const { articles: allArticles } = getAllArticles(category)
  const index = allArticles.findIndex(({ title }) => title === article.title)

  const prev = allArticles.find((article, currentIndex) => index - 1 === currentIndex)
  const next = allArticles.find((article, currentIndex) => index + 1 === currentIndex)

  return {
    prev: {
      available: prev ? true : false,
      title: prev?.title,
      status: prev?.status,
      url: prev?.url,
    },
    next: {
      available: next ? true : false,
      title: next?.title,
      status: next?.status,
      url: next?.url,
    },
  }
}
