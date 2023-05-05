import Navbar from '@/components/Navbar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex w-9/12 gap-8">
      <Navbar />
      {children}
    </main>
  )
}
