import { fetchRoomById } from '@/actions/profile.action';
import Room from '@/components/room'
import React from 'react'

const RoomPage = async({params}:{params:{id:string}}) => {
    if(!params.id) return null;
    const room= await fetchRoomById(params.id)
    console.log(room)
  return (
    <div>
    
       <Room 
        key={room._id}
        id={room._id}
        title={room.title}
        description={room.description}
   
       /> 
   </div>
  )
}

export default RoomPage