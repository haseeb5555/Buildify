import { whyChooseUs } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <section className='flex  justify-start items-start gap-4 px-20 py-12  max-sm:flex-col max-sm:w-full max-sm:px-6'>
      <div className='w-[65%] flex flex-col justify-start items-start gap-8 bg-slate-200 dark:bg-transparent backdrop-blur  dark:bg-black px-12 py-6 ring-1 ring-slate-900 rounded-lg max-sm:w-full max-sm:px-4'>
        <Image src='/assets/blue-purple-1.svg' alt='hero'
          width={1100}
          height={1100}
          className='-z-10 absolute -top-28 right-0 '
          />
        <h1 className='text-[50px] font-bold leading-[60px]'>Why business <br />turn to Buildify</h1>
        {
          whyChooseUs.map((item) => (
            <div key={item.title}
              className='flex flex-col justify-start items-start '>
              <div className='flex justify-start items-start gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 dark:text-white mt-2">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <h1 className='text-[30px] font-bold leading-[40px]'>{item.title}</h1>
              </div>
              <p className='text-[18px] text-slate-500 ml-[30px]'>{item.description}</p>
            </div>
          )
          )
        }

      </div>
      <div className='w-[35%] flex flex-col justify-start items-start gap-2  dark:bg-transparent bg-green-600 ring-1 ring-slate-900 px-4 py-2 shadow-2xl rounded-lg h-[543px] max-sm:w-full '>
        <h1 className='text-[30px] font-bold leading-[40px] mt-[172px] mb-4 text-white'>We’re
the world’s <br/>work
marketplace</h1>

      <div className='flex gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>


          <h2 className='font-bold text-white text-[20px]'>4.9/5</h2>

      </div>
      <p className='text-white text-[16px] ml-8'>Clients rate professionals on Buildify</p>
      <div className='flex gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
      <h2 className='font-bold text-white text-[20px]'>Award winner</h2>
      </div>
      <p className='text-white text-[16px] ml-8'>Buildify is the winner of multiple awards, including the People’s Voice Award, the Webby Award, and the Webby People’s Voice Award.</p>
      </div>

    </section>
  )
}

export default Why