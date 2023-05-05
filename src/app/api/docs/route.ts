import getData from '@/data/getData'

export async function GET(request: Request) {
  const response = getData()
  return new Response(JSON.stringify(response))
}
