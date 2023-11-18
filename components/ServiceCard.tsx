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
    <div className={`flex flex-col items-center justify-center bg-slate-200 dark:bg-black border-r hover: hover:border-spacing-8 shadow-2xl 
     ${className?'w-[750px] hover:border hover:border-purple-700 max-sm:w-[350px] max-lg:w-[730px] max-xl:w-[490px]':'w-[250px]'} max-sm:w-full max-lg:w-[200px] max-lg:h-[180px] h-[200px] max-sm:h-[170px] hover:border-white/80 hover:border rounded-lg dark:hover:shadow-2xl dark:hover:shadow-purple-700 px-4 py-8 gap-4 `}>
      {/* <Image
       src={image}
       alt={title}
       width={80}
       height={80}
       className='object-conatin'
      
      /> */}
      <h1 className=' font-bold text-xl '>{title}</h1>
      <p className='  text-slate-500 '>{description}</p>
      
    </div>
  )
}

export default ServiceCard
