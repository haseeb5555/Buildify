"use client";
import React, { useState } from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";
import { Button } from "./ui/button";

const CreateAnAccount = () => {
  const [isSelected, setIsSelected] = useState(false);

  const user = {
    name: "Junior Garcia",
    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
    username: "jrgarciadev",
    url: "https://twitter.com/jrgarciadev",
    role: "Software Developer",
    status: "Active",
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-20 justify-center items-center flex-col p-20 border-1 rounded-lg shadow-lg shadow-purple-700">
        <h2 className="font-bold  text-[36px]   text-center max-sm:text-[40px] max-lg:text-[46px]">
          Join As Client or Builder
        </h2>
        <div className="flex gap-8 justify-center items-center">
          <div>
            <Checkbox
              aria-label={user.name}
              classNames={{
                base: cn(
                  "inline-flex w-full max-w-md bg-content1",
                  "hover:bg-content2 items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                  "data-[selected=true]:border-primary"
                ),
                label: "w-full",
              }}
              isSelected={isSelected}
              onValueChange={setIsSelected}
            >
              <div className="w-full flex justify-between gap-2">
                <User
                  avatarProps={{ size: "md", src: user.avatar }}
                  description={
                    <Link isExternal href={user.url} size="sm">
                      @{user.username}
                    </Link>
                  }
                  name={user.name}
                />
                <div className="flex flex-col items-end gap-1">
                  <span className="text-tiny text-default-500">
                    {user.role}
                  </span>
                  <Chip color="success" size="sm" variant="flat">
                    {user.status}
                  </Chip>
                </div>
              </div>
            </Checkbox>
          </div>
          <div>
            <Checkbox
              aria-label={user.name}
              classNames={{
                base: cn(
                  "inline-flex w-full max-w-md bg-content1",
                  "hover:bg-content2 items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                  "data-[selected=true]:border-primary"
                ),
                label: "w-full",
              }}
              isSelected={isSelected}
              onValueChange={setIsSelected}
            >
              <div className="w-full flex justify-between gap-2">
                <User
                  avatarProps={{ size: "md", src: user.avatar }}
                  description={
                    <Link isExternal href={user.url} size="sm">
                      @{user.username}
                    </Link>
                  }
                  name={user.name}
                />
                <div className="flex flex-col items-end gap-1">
                  <span className="text-tiny text-default-500">
                    {user.role}
                  </span>
                  <Chip color="success" size="sm" variant="flat">
                    {user.status}
                  </Chip>
                </div>
              </div>
            </Checkbox>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button className="w-full bg-purple-700 hover:bg-purple-600 ">
            mnmnmnmnmnmnmn
          </Button>
          <p className="flex gap-1 m-0">
            Already have an account?
            <Link className="hover:underline cursor-pointer">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
