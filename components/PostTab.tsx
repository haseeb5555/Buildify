import { redirect } from "next/navigation";

import { fetchUserPosts } from "@/lib/actions/user.action";
import Card from "./PostCard";
import { Label } from "./ui/label";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const PostsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result: any;
  result = await fetchUserPosts(accountId);
  if (!result) redirect("/add-project");

  return (
    <section className="mt-9 flex flex-col gap-10">
      <Label>My Posts</Label>
      {result.posts.map((post: any) => (
        <Card
          key={post._id}
          id={post._id}
          currentUserId={currentUserId}
          parentId={post.parentId}
          title={post.title}
          description={post.description}
          budget={post.budget}
          skills={post.skills}
          image={post.image}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: post.author.name,
                  image: post.author.image,
                  id: post.author.image,
                }
          }
          createdAt={post.createdAt}
          comments={post.children}
        />
      ))}
    </section>
  );
};

export default PostsTab;
