import { getOneArticle } from '@/data/getData'

interface Props {
  params: {
    category: string
    article: string
  }
}

export async function GET(request: Request, { params }: Props) {
  const response = getOneArticle(`${params.category}/${params.article}`)
  return new Response(JSON.stringify(response))
}
