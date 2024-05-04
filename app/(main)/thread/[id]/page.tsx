import Card from "@/components/PostCard";
import Comment from "@/components/Comment";
import { fetchThreadById } from "@/lib/actions/post.action";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const  Page =  async ({params}:{params:{id:string}}) => {
  
      if(!params.id) return null;
  
      const user = await currentUser()
      if(!user) return null;
  
      const userInfo = await fetchUser(user.id)
      if (!userInfo?.onboarded) redirect('/onboarding')
       const post = await fetchThreadById(params.id)
       console.log(post)
  return (
     <section className="relative">
    
      <div>
      <Card
             key={post._id}
              id={post._id}
              currentUserId={user?.id || ''}
              parentId={post.parentId}
              title={post.title}
                description={post.description}
                budget={post.budget}
                skills={post.skills}
              author ={post.author}
              createdAt={post.createdAt}
              comments={post.children}
            />
      </div>
      <div className="mt-7">
         <Comment threadId={post.id}
                  currentUserId={JSON.stringify(userInfo?._id)}
                  currentUserImg={userInfo.image}
         />

      </div>
       <div className="mt-10">
         {post.children.map((item:any)=>(
          <>
            {console.log(item)}
               <Card
               key={item._id}
                id={item._id}
                currentUserId={user?.id || ''}
                parentId={item.parentId}
                title={item.title}
                text={item.text}
                description={item.description}
                budget={item.budget}
                skills={item.skills}
                author ={item.author}
                createdAt={item.createdAt}
                comments={item.children}
                isComment={true}
              />
              </>
         ))}
       </div>

     </section>
  )
}

export default Page