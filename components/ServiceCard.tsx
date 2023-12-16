import Image from 'next/image';
import React from 'react'
type Props ={
  image?:string;
  title:string;
  description:string
  className?:string
}
const ServiceCard = ({image,title,description,className}:Props) => {
  return (
    <div className={`flex flex-col  justify-center bg-slate-200 dark:bg-transparent backdrop-blur-sm ring-[1px] ring-slate-100 dark:ring-slate-900
     ${className?'w-[750px] hover:border hover:border-purple-700 max-sm:w-[350px] max-lg:w-[730px] max-xl:w-[490px]':'w-[250px]'} max-sm:w-full max-lg:w-[200px] max-lg:h-[180px] px-2 py-2 max-sm:h-[170px] hover:border-white/80 hover:border rounded-lg gap-2 `}>
      {/* <Image
       src={image}
       alt={title}
       width={80}
       height={80} 
       className='object-conatin'
      
      /> */}
       <div className='flex gap-2 rounded-full '>
      

        <Image
         src='/assets/heart-gray.svg'
         alt={title}
         width={22}
         height={30}
         className='object-conatin rounded-full '
         
         />
       
      <h1 className='font-bold text-left text-xl '>{title}</h1>
     </div>
      <p className='  text-gray-1 '>{description}</p>
      
    </div>
  )
}

export default ServiceCard
