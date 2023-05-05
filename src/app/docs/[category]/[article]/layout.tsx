import SideNavbar from '@/components/SideNavbar'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-[60%] flex-col gap-2 pb-4">
        <article className="flex flex-col justify-between gap-4">{children}</article>
      </div>
      <SideNavbar />
    </>
  )
}
