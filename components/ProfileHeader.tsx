import Image from "next/image";

interface Props {
  accountId: string;
  authUser: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: "User";
}

const ProfileHeader = ({
  accountId,
  authUser,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) => {
  return (
    <div className="flex flex-col justify-start w-full  ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="user image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-left text-heading3-bold ">{name}</h2>
            <p className="text-gray-1 text-base-medium">{username}</p>
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-lg text-base-regular ">{bio}</p>
      <div className="mt-12 h-0.5 bg-cyan-700 w-full" />
    </div>
  );
};

export default ProfileHeader;
