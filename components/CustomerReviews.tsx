import React from 'react'
import { reviews } from '../constants'
import ReviewCard from './ReviewCard'
import Image from 'next/image'

const CustomerReviews = () => {
  return (
    <section className='max-container  dark:bg-black/50 py-8 px-20 mt-20'>

      <Image 
        src='/assets/blue-purple-1.svg' alt='hro'
        width={1440}
        height={500}
        className='-z-10 absolute top-0 right-0 '
      />
      <Image
        src='/assets/looper-pattern.svg' alt='hero'
        width={1100}
        height={500}
        className='-z-10 absolute top-[1500px] right-0 '
      />
           <h3 className='font-palanquin text-center text-4xl font-bold'> ...What Our<span className='text-purple-700'> Customer</span> says?</h3>
           <p className='info-center m-auto mt-4 max-w-lg text-center'>Here stoeries from our customer that say about our quality products</p>
           <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                  {reviews.map((item)=>(
                    <ReviewCard key={item.customerName} {...item}/>
                  ))}
           </div>
    </section>
  )
}

export default CustomerReviews