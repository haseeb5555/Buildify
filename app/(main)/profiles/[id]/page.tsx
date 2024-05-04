import { fetchConstructor } from '@/actions/profile.action';
import ProfileDetail from '@/components/ProfileDetail'
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async(
  {params}:{params:{id:string}}
) => {
  const user = await currentUser();
  if(!user) return null;
  const userInfo = await fetchConstructor(params.id)
   if(!userInfo?.onboarded) redirect('/')
  return (
      <ProfileDetail
        name={userInfo.name}
        title={userInfo.title}
        company={userInfo.company}
        ntn={userInfo.ntn}
        cnic={userInfo.cnic}
        phone={userInfo.phone}
        bio={userInfo.bio}
        image={userInfo.image}
        experience={userInfo.experience}
        certification={userInfo.certification}
        projects={userInfo.projects}
        author={userInfo._id}

      
      />
  )
}

export default page