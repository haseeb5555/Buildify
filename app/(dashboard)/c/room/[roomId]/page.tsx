import { fetchConstructor } from '@/actions/profile.action'
import MessageField from '@/components/MessageField'
import Messages from '@/components/Messages'

import { Message } from '@/lib/models/message.model'
import { currentUser } from '@clerk/nextjs'

interface PageProps {
  params: {
    roomId: string
  }
}


const page = async ({ params }: PageProps) => {
  const user = await currentUser();
  if(!user) return null;


  const userInfo= await fetchConstructor(user.id)

  const { roomId } = params
  const existingMessages = await Message.find({chatRoomId: roomId,
  })
  
  const serializedMessages = existingMessages.map((message) => ({
    message: message.message,
    _id: message._id,
  }))


  
  return (
    <div>
      <p>messages:</p>
      <Messages roomId={roomId} initialMessages={serializedMessages} id={userInfo._id} />
      <MessageField roomId={roomId} userId={userInfo._id} />
    </div>
  )
}

export default page