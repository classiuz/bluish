import { getOneCategory } from '@/data/getData'

interface Props {
  params: {
    category: string
  }
}

export async function GET(request: Request, { params }: Props) {
  const response = getOneCategory(params.category)
  return new Response(JSON.stringify(response))
}
