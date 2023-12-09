import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const ContactCard = () => {
  return (
    <div className='w-full flex flex-col gap-4 shadow-lg border px-8 py-4 '>
      <div className="flex items-center justify-between">
       <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
           <Image
             src="/assets/images/user.png"
             alt="user image"
              fill
             className="rounded-full object-cover shadow-2xl"
           
           />
          </div>
            <div className="flex-1">
             <h2 className="text-left text-heading3-bold ">name</h2>
             <p   className="text-gray-1 text-base-medium">Offline <span>time</span></p>
            </div>
       </div>
    </div>
       <Button className='dark:bg-purple-700 bg-green-700'>
     
             Contact Me
       </Button>

    </div>
  )
}

export default ContactCard