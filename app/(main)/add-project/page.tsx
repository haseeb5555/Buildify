import AddPostForm from "@/components/forms/add-post";
import { fetchUser } from "@/lib/actions/user.action";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const metadata = await clerkClient.users.getUser(user.id);
  const existingUser = metadata.privateMetadata;
  if (existingUser.role === "constructor") redirect("/jobs");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <div className="w-full flex justify-center items-center   max-w-4xl">
      <AddPostForm userId={userInfo._id} />
    </div>
  );
}

export default Page;
