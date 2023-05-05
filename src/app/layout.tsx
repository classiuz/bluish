import './globals.css'
import Header from '@/components/Header'
import { Providers } from '@/utils/Providers'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable}`} suppressHydrationWarning>
      <body className="flex flex-col">
        <Providers>
          <div className="absolute z-30">
            <div className="justify-center-end fixed flex w-screen">
              <span className="absolute right-[350px] top-[420px] z-0 h-[100px] w-[100px] bg-light-sec/90 blur-[100px] dark:bg-dark-sec/60" />
              <span className="absolute right-[250px] top-[220px] z-10 h-[100px] w-[100px] bg-light-outline/90 blur-[100px] dark:bg-dark-outline/60" />
              <span className="absolute right-[150px] top-[52px] z-20 h-[100px] w-[100px] bg-light-pri/90 blur-[100px] dark:bg-dark-pri/60" />
            </div>
          </div>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
