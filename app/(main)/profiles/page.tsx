import ProfileCard from '@/components/ProfileCard'
import { userProfiles } from '@/constants'
import React from 'react'

const page = () => {

    
  return (
    <div  className='flex flex-col justify-center items-center gap-8  px-20 py-12 max-w-[1440px] max-sm:flex-wrap  max-sm:px-2 min-h-screen'>
        <div className='flex justify-center flex-wrap items-center gap-2 '>
            {
                userProfiles.map((profile, index) => (
                   <ProfileCard key={index} 
                     image={profile.image}
                     bio={profile.bio}
                    name={profile.name}
                    username={profile.username}
                    banner={profile.banner}

                   
                   />
                ))
            }
          
        </div>                  
    </div>
  )
}

export default page