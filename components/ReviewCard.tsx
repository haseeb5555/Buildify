import React from 'react'

type Props ={
    imgURL:string,customerName:string ,rating:number,feedback:string
} 
const ReviewCard = ({imgURL,customerName ,rating,feedback}:Props) => {
  return (
    <div className='flex justify-center items-center flex-col'>
         <img src={imgURL} alt="customer" 
          className='rounded-full object-cover w-[120px] h-[120px]'
         />
         <p className='mt-4 max-w-lg text-center text-slate-gray '>{feedback}</p>
         <div className='mt-4'>
            <img src='/assets/icons/star.svg' width={24} height={24} className='object-contain m-0' alt="" />
            <p className="mt-4">{rating}</p>
         </div>
         <h1 className='mt-4 font-montserrat font-bold text-center '>{customerName}</h1>
    </div>
  )
}

export default ReviewCard;