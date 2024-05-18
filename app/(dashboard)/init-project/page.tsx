import { fetchConstructor } from "@/actions/profile.action";
import InitProject from "@/components/forms/Init-project";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;
  const metadata = await clerkClient.users.getUser(user.id);
  const existingUser = metadata.privateMetadata;
  if (existingUser.role === "client") redirect("/posts");
  const userInfo = await fetchConstructor(user.id);
  console.log(userInfo);
  return (
    <div className="w-full flex justify-center items-center   max-w-4xl">
      <InitProject author={userInfo?._id} />
    </div>
  );
};

export default page;
