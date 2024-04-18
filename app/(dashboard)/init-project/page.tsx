import { fetchConstructor } from '@/actions/profile.action'
import InitProject from '@/components/forms/Init-project'
import { currentUser } from '@clerk/nextjs'

const page = async () => {
   
  const user = await currentUser()
  if(!user) return null;
  const userInfo = await fetchConstructor('123')
  console.log(userInfo)
  return (
   <div className='w-full flex justify-center items-center   max-w-4xl'>


     <InitProject
      author={userInfo._id}
     />
 
   </div>
  )
}

export default page