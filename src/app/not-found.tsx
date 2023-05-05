import Link from 'next/link'
import Button from '@/ui/Button'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <title>Page not found - Bluish</title> {/* No support for metadata in not-found.tsx yet */}
      <main className="flex h-[calc(100vh-4rem-2rem)] flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <p className="text-4xl font-bold tracking-wider">404</p>
            <span className="h-8 w-[1px] bg-light-outline bg-opacity-50 dark:bg-dark-outline dark:bg-opacity-50" />
            <p className="text-2xl">Page not found</p>
          </div>
          <p className="mb-4 text-center text-base">
            Sorry but, this page could not be found.
            <br />
            If you think this is a mistake, please contact the administrator.
          </p>
          <Button>
            <Link href="/">Homepage</Link>
          </Button>
        </div>
        <Footer />
      </main>
    </>
  )
}
