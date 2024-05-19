"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { revalidatePath } from "next/cache";
import { deleteThread, updateThread } from "@/lib/actions/post.action";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { Textarea } from "./ui/textarea";

interface Props {
  currentUserId: string;
  authorId: string;
  postId: string;
}
const DropDown = ({ currentUserId, authorId, postId }: Props) => {
  const pathname = usePathname();

  const [form, setForm] = useState({
    title: "",
    budget: "",
    description: "",
    skills: "",
    image: "",
  });
  const { title, budget, description, skills, image } = form;
  const handleDelete = async () => {
    const res = await deleteThread(postId, pathname);
    return res;
  };
  const handleUpdate = async () => {
    const res = await updateThread(
      postId,
      title,
      budget,
      description,
      skills,
      image,
      pathname
    );
    return res;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleUpdate();
    setForm({
      title: "",
      description: "",
      budget: "",
      skills: "",
      image: "",
    });
  };

  return (
    <>
      {currentUserId === authorId && (
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Image
                src="/assets/delete.svg"
                alt="delete"
                width={20}
                height={20}
                className="mr-2 cursor-pointer"
              />
            </AlertDialogTrigger>

            <AlertDialogContent>
              {" "}
              <AlertDialogHeader>
                <AlertDialogTitle className="text-red-700 text-bold text-center text-[24px]">
                  !Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your post and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-700 hover:bg-red-800"
                  onClick={() => handleDelete()}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {/* <Dialog>
            <DialogTrigger asChild>
              <Image
                src="/assets/edit.svg"
                alt="edit"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    className="col-span-3"
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    className="col-span-3"
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="budget" className="text-right">
                    budget
                  </Label>
                  <Input
                    type="number"
                    id="budget"
                    value={budget}
                    className="col-span-3"
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="skills" className="text-right">
                    skills
                  </Label>
                  <Input
                    id="skills"
                    value={skills}
                    className="col-span-3"
                    onChange={(e) =>
                      setForm({ ...form, skills: e.target.value })
                    }
                  />
                </div>
                <DialogFooter>
                  <DialogClose>
                    <Button
                      className="bg-cyan-700 hover:bg-cyan-600"
                      type="submit"
                    >
                      Update
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog> */}
        </div>
      )}
    </>
  );
};

export default DropDown;
