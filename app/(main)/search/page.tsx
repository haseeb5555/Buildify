import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import UserCard from "@/components/UserCard";

import Pagination from "@/components/Pagination";

import { fetchConstructors } from "@/actions/profile.action";
import Searchbar from "@/components/Searchbar";
import { fetchUser } from "@/lib/actions/user.action";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;
  const metadata = await clerkClient.users.getUser(user.id);
  const existingUser = metadata.privateMetadata;
  if (existingUser.role === "constructor") redirect("/jobs");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchConstructors({
    userId: user.id,
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      <Searchbar routeType="search" />

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="text-heading3-bold text-light-1 text-center">
            | Sorry! No Result Found :(
          </p>
        ) : (
          <>
            {result.users.map((person) => (
              // <Link href={`chatroom/${}`}></Link>
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="Client"
              />
            ))}
          </>
        )}
      </div>

      <Pagination
        path="search"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </section>
  );
}

export default Page;
