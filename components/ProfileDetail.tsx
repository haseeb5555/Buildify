import { buildingReviews } from "@/constants";
import Image from "next/image";
import ContactCard from "./ContactCard";
import ExpCard from "./ExpCard";
import AddProject from "./forms/add-project";
import { Badge } from "./ui/badge";

const ProfileDetail = ({
  title,
  company,
  ntn,
  cnic,
  phone,
  bio,
  location,
  image,
  experience,
  certification,
  projects,
  name,
  author,
}: any) => {
  return (
    <div className="w-full flex flex-col  max-w-[1440px] gap-8 max-sm:px-4">
      <div className="flex justify-start items-start w-full gap-8 max-sm:flex-col max-sm:items-center">
        <div className="w-[60%] flex flex-col gap-8 max-sm:w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-40 w-40 object-cover">
                <Image
                  src={image}
                  alt="user image"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className="flex gap-2 items-center
            "
                >
                  <h2 className="text-left text-heading3-bold ">{name}</h2>
                  <p className="text-gray-1 text-base-medium "> @{name}12</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="font-bold">4.5</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className="font-bold text-gray-1">
                    {location ? location : "Lahore"},Pk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-20 font-bold">About Me</h2>
            <p className="text-16 text-gray-1">{bio}</p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-2">
            <h2 className="text-20 font-bold">Skills</h2>
            <ul className="list-none flex gap-2 p-0">
              <li className="text-16 mb-5">Web Development</li>
              <li className="text-16 mb-5">Graphic Design</li>
              <li className="text-16 mb-5">SEO</li>
            </ul>
          </div>

          {/* Reviews */}
        </div>

        <div className="w-[30%] flex justify-center items-center max-sm:w-full">
          <ContactCard name={name} image={image} />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-20 font-bold">Experience</h2>
        <AddProject author={author} />
        <div className="flex flex-wrap gap-2 max-sm:gap-2 mt-4">
          {experience.map((profile: any, index: any) => (
            <div className="flex justify-start items-start gap-4">
              <ExpCard
                title={profile.title}
                company={profile.company}
                startDate={profile.from}
                endDate={profile.to}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-20 font-bold">Reviews</h2>
      <div className="space-y-6">
        {buildingReviews.map((review, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-transparent backdrop-blur ring-1 ring-slate-900"
          >
            <div className="flex items-center justify-start gap-3 mb-2">
              <Image
                src={review.image}
                alt="reviewer"
                width={34}
                height={34}
                className="rounded-full object-cover shadow-2xl"
              />
              <div className="w-full flex justify-between ">
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-bold">{review.name}</h2>
                  <p className="text-gray-1 text-xs">{review.date}</p>
                </div>
                <Badge variant="outline" className="h-8 ">
                  Review
                </Badge>
              </div>
            </div>
            <h2 className="text-xl font-bold">{review.title}</h2>
            <h3 className="text-xl mb-2 font-semibold">{review.price}</h3>
            <p className="text-gray-1 text-[16px]">{review.reviewContent}</p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-yellow-500">{review.rating}</p>
              <img
                src="/assets/icons/star.svg"
                width={14}
                height={14}
                className="object-contain m-0"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center"></div>
    </div>
  );
};

export default ProfileDetail;
