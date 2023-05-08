import { notFound } from 'next/navigation'
import { allData } from 'contentlayer/generated'
import parseData from './parseData'
import normalizeName from '../utils/normalizeName'

const categoriesOrder = ['Getting Started', 'Components', 'Systems']

const getAllData = () => {
  const sortedData = allData.sort((a, b) => categoriesOrder.indexOf(a.category) - categoriesOrder.indexOf(b.category))

  return parseData(sortedData)
}

export const getAllCategories = () => {
  const allData = getAllData()
  const allCategories = categoriesOrder.map((category) => {
    const articles = allData.filter(({ category: currentCategory }) => currentCategory === category)

    return {
      category,
      articles,
    }
  })

  return allCategories
}

export const getAllArticles = (categoryPath: string) => {
  const allData = getAllData()
  const category = normalizeName(categoryPath)
  const articles = allData.filter(({ path }) => path.category === categoryPath)
  if (!articles) notFound()

  return {
    category,
    articles,
  }
}

export const getOneCategory = (categoryPath: string) => {
  const allData = getAllData()
  const finedCategory = allData.find(({ path }) => path.category === categoryPath)
  if (!finedCategory) notFound()

  return finedCategory
}

export const getOneArticle = (articlePath: string) => {
  const allData = getAllData()
  const finedArticle = allData.find(({ path }) => path.complet === articlePath)
  if (!finedArticle) notFound()

  return finedArticle
}

export default getAllData

export const getPrevNextArticle = (currentArticle: string) => {
  const allData = getAllData()
  const index = allData.findIndex(({ path }) => path.complet === currentArticle)

  const prev = index !== 0
  const next = index + 1 !== allData.length

  return {
    prev: prev ? allData[index - 1] : undefined,
    next: next ? allData[index + 1] : undefined,
  }
}
