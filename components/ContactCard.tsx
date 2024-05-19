'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const ContactCard = ({
  name,
 image
}:{
  name:string,
  image:string
}) => {

  const router = useRouter()
  const createRoom = async () => {
    const res = await fetch('/api/chatroom/create')
    const roomId: string = await res.text()
    router.push(`/chat/room/${roomId}`)
  }
  return (
    <div className='mt-40 w-full flex flex-col gap-4 shadow-lg border px-8 py-4 '>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={image}
              alt="user image"
              fill
              className="rounded-full object-cover shadow-2xl"

            />
          </div>

            <div className="flex-1">
             <h2 className="text-left text-heading3-bold ">{name}</h2>
             <p   className="text-gray-1 text-base-medium">Available</p>
            </div>
       </div>
    </div>
       <Button  variant="ghost" className='w-full dark:bg-purple-700 bg-green-700' onClick={createRoom}>
     
             Contact Me
       </Button>

          </div>


    
  )
}

export default ContactCard