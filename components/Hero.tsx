import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='w-full flex justify-start items-start gap-10  px-20 py-12  mt-8 h-full max-sm:flex-col max-sm:px-8 '>
            <div className='w-1/2 flex flex-col items-start gap-4 max-sm:w-full'>
              <h1 className='text-[60px] font-bold text-blue-700 leading-[80px] max-sm:text-[40px] max-sm:leading-[60px] '> Explore best potiential 
                <span className='text-purple-700'> clients and contractor
              </span> </h1>
     <p className='text-[18px] text-slate-500 t'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <CustomButton text='Get Started' className='bg-purple-900 text-white rounded-3xl px-7 py-3 hover:bg-purple-700 ' />
            </div>
            <Image src='/assets/images/bg.jpeg' alt='main'
             width={500}
             height={500}
             className='rounded-3xl object-cover dark:shadow-lg dark:shadow-blue-700 shadow-lg shadow-cyan-600'
            
            />

    </section>
  )
}
