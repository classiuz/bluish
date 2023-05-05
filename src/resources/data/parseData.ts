import { type Data } from 'contentlayer/generated'
import { type Article } from './types'

const parseData = (data: Data[]): Article[] => {
  const parsedData = data.map(({ title, description, status, body, url }) => {
    return {
      title,
      description,
      status,
      body: body.code,
      url,
    }
  })

  return parsedData
}

export default parseData
