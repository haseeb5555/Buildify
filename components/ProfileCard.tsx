import Image from 'next/image'
import React from 'react'

type User={
  image:string,
  name:string,
  username:string,
  bio:string,
  banner:string

}

const ProfileCard = ({image,name,username,bio,banner}:User) => {
  return (
    <div className="mt-4 relative flex flex-col justify-start w-[350px]  bg-slate-50 dark:bg-black/50 border px-1 rounded-xl">
    
      <Image
        src={banner}
        alt="banner image"
        width={350}
        height={150}
        className="rounded-xl h-[200px]"
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-4 dark:text-white top-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

  
      
    <div className="flex items-center justify-between">
       <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 object-cover">
           <Image
             src={image}
             alt="user image"
              fill
             className="rounded-full object-cover shadow-2xl"
           
           />
          </div>
            <div className="flex-1">
             <h2 className="text-left text-heading3-bold ">{name}</h2>
             <p   className="text-gray-1 text-base-medium">@{username}</p>
            </div>
       </div>
    </div>
    <p className="mt-6 max-w-lg text-base-regular  ">{bio}</p>


    <div className="mt-12 h-0.5  w-full"/>
</div>
  )
}

export default ProfileCard