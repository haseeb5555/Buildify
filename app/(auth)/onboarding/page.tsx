import AccountProfile from "@/components/forms/AcountProfile";
import { fetchUser } from "@/lib/actions/user.action";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const metadata = await clerkClient.users.getUser(user.id);
  const existingUser = metadata.privateMetadata;
  if (existingUser.role === "constructor") redirect("/jobs");
  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };
  if (!user) return null;
  const userFromDb = await fetchUser(user.id);
  console.log(userFromDb, "userFromDb");
  if (userFromDb?.onboarded) redirect("/posts");
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start  px-10">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-2 base-text-regular text-cyan-500">
        Complete your file to use app
      </p>
      <section className="mt-9  p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
