"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { toast, Toaster } from "sonner";
import Image from "next/image";
import { createThread } from "@/lib/actions/post.action";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { ChangeEvent, useState } from "react";
import { image } from "@nextui-org/react";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

const PostValidation = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  budget: z.string().nonempty({ message: "Budget is required" }),
  skills: z.string().nonempty({ message: "Skills are required" }),
  image: z.string().optional(),
});

const AddPostForm = ({ userId }: { userId: string }) => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const pathname = usePathname();
  const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      toast.success("Profile added succesfully");
      router.push("/posts");
    },
    onError: () => {
      return toast.error("Profile update failed");
    },
  });

  const form = useForm({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      title: "",
      description: "",
      budget: "",
      skills: "",
      accountId: userId,
      image: "" || undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof PostValidation>) => {
    const blob = values.image;
    const hasIsImageChanged = isBase64Image(blob);

    if (hasIsImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.image = imgRes[0].fileUrl;
      }
    }
    mutate({
      title: values.title,
      description: values.description,
      skills: values.skills,
      author: userId,
      budget: values.budget,
      image: values.image,
      path: pathname,
    });
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.value.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col   gap-10"
      >
        <h1 className="font-bold text-[35px] -mb-6">
          Tell us what you need done
        </h1>
        <p className="text-[16px] text-cyan-500">
          Contact skilled freelancers within minutes. View profiles, ratings,
          portfolios and chat with them. Pay the freelancer only when you are
          100% satisfied with their work
        </p>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold">Title</FormLabel>
              <FormControl className="no-focus border border-dark-4">
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        {/* <Toaster /> */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold">Description</FormLabel>
              <FormControl className="no-focus border border-dark-4">
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold">Budget</FormLabel>
              <FormControl className="no-focus border border-dark-4">
                <Input type="number" min={0} {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold">Skills</FormLabel>
              <FormControl className="no-focus border border-dark-4">
                <Input {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        <Label className="text-base-semibold">Upload a Photo/ Blueprint</Label>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="">
                {field.value && (
                  <Image
                    src={field.value}
                    alt="image"
                    width={96}
                    height={96}
                    priority
                    className="rounded-lg object-contain"
                  />
                  // ):(

                  //   <Image
                  //   src="/assets/profile.svg"
                  //   alt="profile_photo"
                  //   width={24}
                  //   height={24}

                  //   className=" object-contain"
                  //  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Upload a photo"
                  className=""
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className=" bg-cyan-700 text-black dark:text-light-1 hover:bg-cyan-600 dark:hover:bg-cyan-600"
        >
          {isPending ? "Posting..." : "Post"}
        </Button>
      </form>
    </Form>
  );
};

export default AddPostForm;
