import { type Data } from 'contentlayer/generated'
import { type MainData } from './types'
import normalizeName from '../utils/normalizeName'
import parseData from './parseData'

const sortData = (data: Data[]): MainData[] => {
  const categoriesOrder = ['getting-started', 'components', 'systems']
  const sortedData = categoriesOrder.map((currentCategory) => {
    const category = normalizeName(currentCategory)
    const rawArticles = data.filter(({ _raw: { sourceFileDir } }) => sourceFileDir === currentCategory)
    const articles = parseData(rawArticles)

    return {
      category,
      articles,
    }
  })

  return sortedData
}

export default sortData
