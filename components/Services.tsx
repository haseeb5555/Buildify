import { services } from '@/constants' 
import React from 'react'
import ServiceCard from './ServiceCard'

const Tecnolgies = () => {
  return (
    <section className='max-w-[1440px] w-full flex flex-col justify-center items-center px-2 py-12 max-sm:px-8 max-lg:px-12'>
    
    <h1 className='font-bold  text-[26px]  text-center max-sm:text-[40px] max-lg:text-[46px] '>| Services</h1>
     <div className='mt-12 flex justify-center items-center flex-wrap gap-8 max-lg:gap-6 '>

       {
         services.map((service=>(
            <ServiceCard 
            key={service.title}
             title ={service.title}
             description={service.description}
              
            />
        )))
       }
        
     </div>
    </section>
  )
}

export default Tecnolgies