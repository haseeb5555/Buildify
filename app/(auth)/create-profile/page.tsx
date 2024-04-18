import ProfileForm from '@/components/forms/profile';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async() => {
  const user = await currentUser();
  if (!user) return null;
  const userInfo={}; 
    const userData={
        id: userInfo.id ||user?.id,
        name:  userInfo.name||user?.firstName,
        image :userInfo.image||user?.imageUrl
    };

    

  return (
    <div>
      <ProfileForm user={userData} />
    </div>
  )
}

export default page