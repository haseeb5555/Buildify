import Image from "next/image";
import Link from "next/link";
import DropDown from "./drop-down";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  title: string;
  description: string;
  budget: string;
  skills: string;
  text?: string;
  image?: string;
  author: {
    name: string;
    image: string;
    id: string;
  };

  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

function Card({
  id,
  currentUserId,
  parentId,
  author,
  title,
  description,
  budget,
  skills,
  text,
  createdAt,
  comments,
  isComment,
  image,
}: Props) {
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment
          ? "mt-4 px-0 xs:px-7"
          : "dark:shadow dark:shadow-cyan-700  p-7"
      }`}
    >
      <DropDown
        currentUserId={currentUserId}
        authorId={author.id}
        postId={id}
        posttitle={title}
        postdescription={description}
        postbudget={budget}
        postskills={skills}
      />
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="user_community_image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold ">
                {author.name}
              </h4>
            </Link>

            <h3 className="text-base-semibold mt-2">{title}</h3>
            <p className="mt-2 text-small-regular ">
              {isComment ? text : budget + "$"}
            </p>

            <p className="mt-2 text-small-regular ">{description}</p>
            {image && (
              <Image
                src={image}
                alt={image}
                width={400}
                height={400}
                className="object-contain rounded-lg mt-2"
              />
            )}

            <div className="mt-5 flex flex-col gap-3">
              <div className="flex flex-row gap-3.5">
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="heart"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Image
                  src="/assets/share.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
