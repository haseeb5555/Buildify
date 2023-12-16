import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import UserCard from "@/components/UserCard";
import Searchbar from "@/components/Searchbar";

import { userProfiles } from "@/constants";
import { Button } from "@/components/ui/button";


async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
//   const user = await currentUser();
//   if (!user) return null;


//   if (!userInfo?.onboarded) redirect("/onboarding");

//   const result = await fetchUsers({
//     userId: user.id,
//     searchString: searchParams.q,
//     pageNumber: searchParams?.page ? +searchParams.page : 1,
//     pageSize: 25,
//   });

  return (
    <section>
      <h1 className='head-text mb-10'>Explore the Profile of a Skilled Constructor</h1>

      <Searchbar routeType='search' />
       <Button className="dark:bg-white dark:text-black bg-black text-white mt-8 dark:hover:bg-white/50"> Top Rated Constructor</Button>
      <div className='mt-14 flex flex-col gap-9'>
        {userProfiles.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <>
            {userProfiles.map((person) => (
              // <Link href={`chatroom/${}`}></Link>
              <UserCard
                key={person.name}
           
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType='User'
              />
            ))}
          </>
        )}
      </div>

      {/* <Pagination
        path='search'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      /> */}
    </section>
  );
}

export default Page;
