'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='relative bg-white dark:bg-black flex-grow-0 px-20 max-sm:px-4'>
        
        <div className='border-t border-gray-200'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='pb-8 pt-16'>
              <div className='flex justify-center'>
               Tameer.Pk
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <Image
                src='/assets/blue-purple-1.svg'
                alt='logo'
                 width={400}
                  height={700}
                className='absolute top-0 right-0 mx-auto' 
              />
                 <Image
                src='/assets/blue-purple-1.svg'
                alt='logo'
                 width={400}
                  height={700}
                className='absolute top-0 left-0 mx-auto' 
              />
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute  bg-transparent backdrop-blur border rounded-xl  border-slate-900 inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>

                <div className='text-center relative mx-auto max-w-sm'>
                  <h3 className='font-semibold text-gray-900 dark:text-slate-200'>
                    Become a Seller and Addvertiser
                  </h3>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    If you&apos;d like to sell high-quality
                    digital products, you can do so in
                    minutes.{' '}
                    <Link
                      href='/sign-in'
                      className='whitespace-nowrap font-medium text-black dark:text-white hover:text-zinc-900'>
                      Get started &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

    </footer>
  )
}

export default Footer