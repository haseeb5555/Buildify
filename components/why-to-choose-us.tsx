import { whyChooseUs } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <section className='flex  justify-start items-start gap-4 px-20 py-12 '>
      <div className='w-[65%] flex flex-col justify-start items-start gap-8 bg-slate-200 dark:bg-black px-12 py-6 dark:border rounded-lg shadow-2xl shadow-purple-700'>

        <h1 className='text-[50px] font-bold leading-[60px]'>Why business <br />turn to Tameer </h1>
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
      <div className='w-[35%] flex flex-col justify-start items-start gap-8  bg-purple-700'>
        <h1 className='text-[30px] font-bold leading-[40px]'>HElloo</h1>
      </div>

    </section>
  )
}

export default Why