
import { connectToDB } from '@/lib/models/connection'
import { Message } from '@/lib/models/message.model'
import Profile from '@/lib/models/profile.model'
import User from '@/lib/models/user.model'
import { pusherServer } from '@/lib/pusher'
import { clerkClient } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message, roomId ,author} = await req.json()

  pusherServer.trigger('chat', 'incoming-message', message)
  
        await connectToDB()
    const createdMessage=  await Message.create({
         message,
         chatRoomId: roomId,
         author: author, 
       })
   const client=await clerkClient.users.getUser(author)
   const metadata = client.privateMetadata
   console.log(metadata.role)
   if(metadata.role==='client'){
     await User.findByIdAndUpdate(author,{
       $push:{messages:createdMessage._id}
    })}else {
      await Profile.findByIdAndUpdate(author,{
        $push:{messages:createdMessage._id}
      })
    }
  
  return  NextResponse.json(({ message: 'Message sent successfully',createdMessage }))
  }