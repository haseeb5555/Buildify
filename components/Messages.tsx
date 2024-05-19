'use client'

import { fetchUser } from '@/lib/actions/user.action'
import { pusherClient } from '@/lib/pusher'
import { ScrollShadow } from '@nextui-org/react'
import axios from 'axios'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

interface MessagesProps {
  initialMessages: {
    message: string
    _id: string
   
  }[]
  roomId: string
  id: string
  // userInfo: {
  //   _id: string
  //   name: string
  //   image: string

  // }
  
}

const Messages: FC<MessagesProps> = ({ initialMessages, roomId,id }) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([])
  const messageEndRef= useRef<HTMLInputElement>(null)
 const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const channel = pusherClient.subscribe('chat')

    const handleIncomingMessage = (text: string) => {
      setIncomingMessages((prev) => [...prev, text])
      console.log(text)
    }

    channel.bind('incoming-message', handleIncomingMessage)

    return () => {
      channel.unbind('incoming-message', handleIncomingMessage)
      pusherClient.unsubscribe('chat')
    }
  }, [])

  const scrollTobottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' }) ;
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [incomingMessages]);

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await fetchUser(id)
      console.log(data)
    }
    fetchData()
    scrollTobottom();
  }, [initialMessages]);

  return (
    <ScrollShadow className='custom-scrollbar w-full h-[500px] ' hideScrollBar={false} orientation="vertical">
    <div>
      {initialMessages.map((message) => (
       <div className="chat chat-start">
       <div className="chat-image avatar">
         <div className="w-10 rounded-full">
           <Image alt="chat-image" src='' width={40} height={40} className='rounded-full' />
         </div>
       </div>
       <div className="chat-header">
          {/* {userInfo.name} */}

       </div>
       <div className="chat-bubble">{message.message}</div>
     </div>
      ))}
      {incomingMessages.map((text, i) => (
        <>
        { console.log(text)}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src='' />
            </div>
          </div>
          <div className="chat-header">
            {/* {userInfo.name} */}
          </div>
          <div className="chat-bubble" ref={ref}>{text}</div>
        </div>
         </>
      ))}
    </div>
      <div ref={messageEndRef}></div>
    </ScrollShadow>
  )
}

export default Messages
