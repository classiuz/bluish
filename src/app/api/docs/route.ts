import getAllData from '@/data/getData'

export async function GET(request: Request) {
  const response = getAllData()
  return new Response(JSON.stringify(response))
}
