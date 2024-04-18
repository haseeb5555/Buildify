import Card from "@/components/PostCard";
import { fetchPosts } from "@/lib/actions/post.action";

import { currentUser } from "@clerk/nextjs";
export default async function Home() {
    const result = await fetchPosts(1,30)
    
    const user = await currentUser();

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length===0 ?(
          <p className="no-result">No thread found!</p>
        ):(
          <>
           {result.posts.map((post)=>(
            <Card key={post._id}
              id={post._id}
              currentUserId={user?.id || ''}
              parentId={post.parentId}
              title={post.title}
              description={post.description}
              budget={post.budget}
              skills={post.skills}
              author ={post.author}
              image={post.image}
              createdAt={post.createdAt}
              comments={post.children}
            />
           ))}
          </>
        )}
      </section>
    </>
  )
}
