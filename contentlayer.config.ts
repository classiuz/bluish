import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Data = defineDocumentType(() => ({
  name: 'Data',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the article',
      required: true,
    },
    status: {
      type: 'string',
      description: 'Feature current state of the article',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/docs/${article._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/app/docs',
  documentTypes: [Data],
})
