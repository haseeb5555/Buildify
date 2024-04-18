import WindowCard from '@/components/WindowCard'
import React from 'react'

const page = async() => {
 const res= await fetch('http://localhost:3000/api/room',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  
 })
  const data = await res.json()
  console.log(data)
  
  return (
    <div className='flex gap-8'>
      {data?.map((item:any)=>(
        <div className='flex justify-start items-start gap-8 '>
        <WindowCard
        key={item._id}
        id={item._id}
        title={item.title}
        description={item.description}
        budget={item.budget}
        TotalAmount={item.TotalAmount}
        milestones={item.milestones}
           />
        </div>
      ))}

    </div>
  )
}

export default page