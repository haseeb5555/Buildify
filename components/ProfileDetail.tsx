import Image from "next/image";
import React from "react";
import ContactCard from "./ContactCard";
import { userProfiles } from "@/constants";
import ProfileCard from "./ProfileCard";
import Caurosel from "./caurosel/Caurosel";

const ProfileDetail: React.FC = () => {
  return (
    <div className="w-full flex flex-col px-20 py-12 max-w-[1440px] gap-8 max-sm:px-4">


      <div className="flex justify-start items-start w-full  max-sm:flex-col max-sm:items-center">

        <div className="w-[60%] flex flex-col gap-8 max-sm:w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-40 w-40 object-cover">
                <Image
                  src="/assets/images/user.png"
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
                  <h2 className="text-left text-heading3-bold ">name</h2>
                  <p className="text-gray-1 text-base-medium "> @username</p>
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
                  <p className="font-bold text-gray-1">location</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-20 font-bold">About Me</h2>
            <p className="text-16 text-gray-1">
              Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eos harum qui dicta non, officiis voluptatem beatae error deserunt ut doloribus officia exercitationem illum aliquam aliquid sequi consequuntur quaerat minus!Lorem amet, consectetur adipiscing elit. Nulla vitae
              elit libero, a pharetra augue.
            </p>
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
          <ContactCard />
        </div>

      </div>
      <div className="flex flex-col">
        <h2 className="text-20 font-bold">My Projects</h2>
        <div className=" flex justify-center flex-wrap items-center gap-2">
          {
            userProfiles.map((profile, index) => (
              <ProfileCard key={index}
                image={profile.image}
                bio={profile.bio}
                name={profile.name}
                username={profile.username}
                banner={profile.banner}


              />
            ))
          }
        </div>
      </div>
      <div className="flex flex-col">
<<<<<<< HEAD
        <h2 className="text-20 font-">Reviews</h2>
        <div className="flex flex-col items-center">
          {/* Review items */}
          <div className="m-10">
            <p className="text-16 font-bold">John Smith</p>
            <p className="text-16 mb-5">Rating: 5</p>
            <p className="text-16">Great work! Highly recommended.</p>
          </div>bold
          <div className="m-10">
            <p className="text-16 font-bold">Jane Doe</p>
            <p className="text-16 mb-5">Rating: 4.5</p>
            <p className="text-16">Good communication and quality work.</p>
          </div>
=======
        <Caurosel />
        <h2 className="text-20 font-bold">Reviews</h2>
        <div className="flex flex-col items-center">


>>>>>>> 00534a3cb0c995e27d8d6b0d4dee7d2f2f84a28b
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
