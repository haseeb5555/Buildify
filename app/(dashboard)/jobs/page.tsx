import PostCard from '@/components/PostCard'
import { posts } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col  '>

       <>
        {
            posts.map((post)=>(

              <PostCard
                key={post.timestamp}
                profile = {post.profile}
                 tweet = {post.tweet}
                  likes = {post.likes}
                  retweets = {post.retweets}
                   timestamp = {post.timestamp} 
                     />
            ))
            }

            </>
    
    </div>
           
)

}

export default page