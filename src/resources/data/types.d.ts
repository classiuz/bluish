export type MainData = {
  category: string
  articles: Article[]
}

export type Article = {
  title: string
  description: string
  status: string | undefined
  body: string
  url: string
}