import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Providers } from '../(landing_page)/providers'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeftSidebar from '@/components/LeftSidebar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'main',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='dark' >
        <body className={inter.className}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Navbar/>
          <main className='flex flex-row'>

          <section className='main-container'>
             <div className='w-full '>
              <Image
              src='/assets/images/bg.png'
              alt='bg'
               width={440}
                height={400}
                className='-z-10  opacity-30 fixed top-0 -right-28 transform rotate-45  '
              />

               {children}
               <Image
               src='/assets/blue-purple-1.svg'
                alt='bg'
                width={940}
                height={400}
                className='-z-20 fixed bottom-0 -left-28  transform rotate-180 opacity-40   '
                />
                 <Image
               src='/assets/blue-purple-1.svg'
                alt='bg'
                width={940}
                height={400}
                className='-z-20 fixed bottom-0 -left-28 top-28 transform rotate-180 opacity-40   '
                />
             </div>
          </section>

          </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
