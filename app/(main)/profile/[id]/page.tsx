import PostsTab from "@/components/PostTab";
import ProfileHeader from "@/components/ProfileHeader";
import { fetchUser } from "@/lib/actions/user.action";


import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({params}:{params:{id:string}}) => {

    const user = await currentUser();
     if(!user) return null;
     const userInfo = await fetchUser(params.id)
      if(!userInfo?.onboarded) redirect('/onboarding')
  return (
    <section>
 
    <ProfileHeader
      accountId={userInfo.id}
      authUser={user.id}
      name={userInfo.name}
      username={userInfo.username}
      imgUrl={userInfo.image}
      bio={userInfo.bio}

    
    />
    <div className="mt-9">

       
                  <PostsTab
                    currentUserId={user.id}
                   accountId={userInfo.id}
                   accountType="User"
                  />
             
           
    </div>
    </section>
  )
}

export default Page



