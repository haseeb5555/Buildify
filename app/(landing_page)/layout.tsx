import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buildify',
  description: 'Buildify is a platform for developers to share and discover new projects.',
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
            <Navbar />
            {children}
            <Footer />

          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
