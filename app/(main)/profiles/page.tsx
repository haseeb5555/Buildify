import { fetchProfiles } from "@/actions/profile.action";
import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";

const page = async () => {
  const userProfiles = await fetchProfiles();
  console.log(userProfiles, "userProfiles");
  return (
    <div className="flex flex-col justify-center items-center gap-8  max-w-[1440px] max-sm:flex-wrap  max-sm:px-2 min-h-screen">
      <div className="flex justify-center flex-wrap items-center gap-16">
        {userProfiles?.map((profile, index) => (
          <Link href={`/profiles/${profile.id}`} key={index}>
            <ProfileCard
              key={index}
              image={profile.image}
              bio={profile.bio}
              name={profile.name}
              username={profile.username}
              phone={profile.phone}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
