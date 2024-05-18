import Card from "@/components/PostCard";
import { fetchPosts } from "@/lib/actions/post.action";

import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function Home() {
  const result = await fetchPosts(1, 30);

  const user = await currentUser();
  if (!user) return null;
  const metadata = await clerkClient.users.getUser(user.id);
  const existingUser = metadata.privateMetadata;
  if (existingUser.role === "client") redirect("/posts");

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No thread found!</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <Card
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                title={post.title}
                description={post.description}
                budget={post.budget}
                skills={post.skills}
                author={post.author}
                image={post.image}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
