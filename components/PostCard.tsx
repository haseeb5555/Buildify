import { Card } from "@/components/ui/card";
import { HeartIcon, MessageCircleIcon, TwitterIcon } from "lucide-react";
 type Props = {
    profile: {
        imageSrc: string;
        name: string;
        username: string;
    };
    tweet: string;
    likes: number;
    retweets: number;
    timestamp: string;
 }

export default function PostCard({ profile, tweet, likes, retweets, timestamp }:Props) {
  return (
    <Card
      key="1"
      className="w-full  bg-white dark:bg-transparent backdrop-blur rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3 ring-1 ring-slate-900"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        <div className="p-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Profile picture"
                className="rounded-full"
                height="40"
                src={profile.imageSrc || "/placeholder.svg"}
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {profile.name}
                </div>
                <div className="text-gray-400 dark:text-gray-300">@{profile.username}</div>
              </div>
            </div>
         
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            {tweet}
          </p>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">{likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">{retweets}</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">{timestamp}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

