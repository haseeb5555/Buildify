import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Providers } from '../(landing_page)/providers'
import { Navbar } from '@/components/Navbar'

import Image from 'next/image'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
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
            <Sidebar/>
          <section className='main-container'>
             <div className='w-full max-w-4xl'>
              <Image
              src='/assets/images/bg.png'
              alt='bg'
               width={440}
                height={400}
                className='-z-10  opacity-30 fixed top-0 -right-28 transform rotate-45  '
              />

               {children}
               <Image
               src='https://64.media.tumblr.com/ef4a3ce5dd7ba03cea2529629f1a0092/3d2fd96301d49e44-51/s640x960/dd707453c200cafb6fa2a548cf86c07ae0bfa768.gifv'
                alt='bg'
                width={940}
                height={400}
                className='-z-20 fixed bottom-0 -left-28 transform rotate-180 opacity-40   '
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
