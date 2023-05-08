import { type Data } from 'contentlayer/generated'

const parseData = (data: Data[]) => {
  const parsedData = data.map(({ category, title, description, status, body, url, _raw: { flattenedPath } }) => {
    return {
      category,
      title,
      description,
      status,
      body: body.code,
      url,
      path: {
        complet: flattenedPath,
        category: flattenedPath.split('/')[0],
        article: flattenedPath.split('/')[1],
      },
    }
  })

  return parsedData
}

export default parseData
