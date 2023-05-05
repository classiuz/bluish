import { getAllArticles } from '@/data/getData'

interface Props {
  params: {
    category: string
  }
}

export async function GET(request: Request, { params }: Props) {
  const response = getAllArticles(params.category)
  return new Response(JSON.stringify(response))
}
