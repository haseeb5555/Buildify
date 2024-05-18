"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { deleteThread } from "@/lib/actions/post.action";
import { usePathname } from "next/navigation";

interface Props {
  currentUserId: string;
  authorId: string;
  postId: string;
}
const DropDown = ({ currentUserId, authorId, postId }: Props) => {
  const pathname = usePathname();
  const handleDelete = async () => {
    const res = await deleteThread(postId, pathname);
    return res;
  };
  return (
    <>
      {currentUserId === authorId && (
        <div className="flex justify-end">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src="/assets/more.svg"
                alt="more"
                width={24}
                height={24}
                className="cursor-pointer object-contain"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8}>
              <DropdownMenuItem>
                <Image
                  src="/assets/edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete()}>
                <Image
                  src="/assets/delete.svg"
                  alt="delete"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
};

export default DropDown;
