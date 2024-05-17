"use client";

import { useForm } from "react-hook-form";
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
import { UserValidation } from "@/lib/validations";
import * as z from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.action";
import { usePathname, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Toaster, toast } from "sonner";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    bio: string;
    image: string;
    name: string;
  };
  btnTitle: string;
}
const AccountProfile = ({ user, btnTitle }: Props) => {
  const { isPending, mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      router.push("/add-project");
    },
    onError: () => {
      return toast.error("Profile update failed");
    },
  });
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
    },
  });

  async function onSubmit(values: z.infer<typeof UserValidation>) {
    const blob = values.profile_photo;
    const hasIsImageChanged = isBase64Image(blob);

    if (hasIsImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }

    mutate({
      bio: values.bio,
      name: values.name,
      image: values.profile_photo,
      username: values.username,
      userId: user.id,
      path: pathname,
    });
  }

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
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="profile_photo"
                    width={24}
                    height={24}
                    className=" object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Upload a photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel className="text-base-semibold ">Name</FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Input
                  type="text"
                  className="w-full max-md:w-full border border-dark-4 bg-dark-3 text-light-1 "
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel className="text-base-semibold ">Username</FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Input
                  type="text"
                  className="w-full max-md:w-full border border-dark-4 bg-dark-3 text-light-1  no-focus !important no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel className="text-base-semibold ">Bio</FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Textarea
                  rows={5}
                  className="w-full max-md:w-full border border-dark-4 bg-dark-3 text-light-1  no-focus !important"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-cyan-700  hover:bg-cyan-600"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update"}
        </Button>
      </form>
    </Form>
  );
};
export default AccountProfile;
