"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

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
import { createProfile } from "@/actions/profile.action";
import { usePathname, useRouter } from "next/navigation";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Separator } from "../ui/separator";

export const ProfileSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  ntn: z
    .string()
    .max(7, {
      message: "NTN must be 7 characters.",
    })
    .min(7, {
      message: "NTN must be 7 characters.",
    }),
  cnic: z
    .string()
    .max(13, {
      message: "CNIC must be 13 characters.",
    })
    .min(13, {
      message: "CNIC must be 13 characters.",
    }),

  phone: z
    .string()
    .max(11, {
      message: "Phone must be 11 characters.",
    })
    .min(11, {
      message: "Phone must be 11 characters.",
    }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),

  experience: z.array(
    z
      .object({
        title: z.string().min(2, {
          message: "Title must be at least 2 characters.",
        }),
        company: z.string().min(2, {
          message: "Company must be at least 2 characters.",
        }),
        from: z.string().nonempty({ message: "From date is required" }),
        to: z.string().nonempty({ message: "To date is required" }),
      })
      .refine((data) => new Date(data.from) < new Date(data.to), {
        message: "From date must be before To date",
        path: ["to"],
      })
  ),
  certification: z.array(
    z.object({
      title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
      }),
      company: z.string().min(2, {
        message: "Company must be at least 2 characters.",
      }),
      issue: z.string().nonempty({ message: "Issue date is required" }),
    })
  ),
});

export type ProfileFormValues = z.infer<typeof ProfileSchema>;

export default function ProfileForm({ user }: { user: any }) {
  const { isPending, mutate } = useMutation({
    mutationFn: createProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      router.push("/jobs");
    },
    onError: () => {
      return toast.error("Profile update failed");
    },
  });

  const path = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      title: "",
      company: "",
      ntn: "",
      cnic: "",
      phone: "",
      bio: "",
      experience: [
        {
          title: "",
          company: "",
          from: "",
          to: "",
        },
      ],
      certification: [
        {
          title: "",
          company: "",
          issue: "",
        },
      ],
    },
  });

  const { control, handleSubmit, register } = form;
  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });
  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: "certification",
  });

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    mutate({
      name: user?.name,
      image: user?.image,
      userId: user?.id,
      title: values.title,
      company: values.company,
      ntn: values.ntn,
      cnic: values.cnic,
      phone: values.phone,
      bio: values.bio,
      experience: values.experience,
      certification: values.certification,
      path: path,
      projects: [],
    });
  }

  return (
    <>
      <div className="flex justify-center item-center">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
            <h1 className="font-bold text-[24px] mb-0 text-center text-cyan-700 mb-4">
              Create Profile
            </h1>
            <Separator className="bg-cyan-700 " />
            <div className="flex gap-8">
              <FormField
                control={control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[18px]">Company</FormLabel>
                    <FormControl>
                      <Input {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="cnic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CNIC</FormLabel>
                    <FormControl>
                      <Input
                        maxLength={13}
                        {...field}
                        className="account-form_input"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-8">
              <FormField
                control={control}
                name="ntn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NTN</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="account-form_input"
                        maxLength={7}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="account-form_input"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={3}
                        className="account-form_input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormLabel className="text-[24px] font-bold mb-5 text-cyan-700">
                Experience
              </FormLabel>
              <Separator className="bg-cyan-700 mb-5" />
              {experienceFields.map((field, index) => (
                <>
                  <div key={field.id} className="flex mb-2  gap-4">
                    <FormField
                      control={control}
                      name={`experience.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} className="account-form_input" />
                          </FormControl>
                          <FormMessage className="text-red-700" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name={`experience.${index}.company`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input {...field} className="account-form_input" />
                          </FormControl>
                          <FormMessage className="text-red-700" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`experience.${index}.from`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>From</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="account-form_input"
                              type="date"
                            />
                          </FormControl>
                          <FormMessage className="text-red-700" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-4">
                    <FormField
                      control={control}
                      name={`experience.${index}.to`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>To</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="account-form_input"
                              type="date"
                            />
                          </FormControl>
                          <FormMessage className="text-red-700" />
                        </FormItem>
                      )}
                    />
                    <div className="mt-8 flex gap-2">
                      {experienceFields.length > 1 && (
                        <MinusCircleIcon
                          onClick={() => removeExperience(index)}
                          className="cursor-pointer h-8 w-8"
                        />
                      )}
                      <PlusCircleIcon
                        onClick={() =>
                          appendExperience({
                            title: "",
                            company: "",
                            from: "",
                            to: "",
                          })
                        }
                        className="cursor-pointer h-8 w-8"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div>
              <FormLabel className="text-[24px] font-bold mb-5 text-cyan-700">
                Certification
              </FormLabel>
              <Separator className="bg-cyan-700 mb-5" />
              {certificationFields.map((field, index) => (
                <div key={field.id} className="flex  gap-4 mb-2">
                  <FormField
                    control={control}
                    name={`certification.${index}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} className="account-form_input" />
                        </FormControl>
                        <FormMessage className="text-red-700" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name={`certification.${index}.company`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input {...field} className="account-form_input" />
                        </FormControl>
                        <FormMessage className="text-red-700" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`certification.${index}.issue`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="account-form_input"
                            type="date"
                          />
                        </FormControl>
                        <FormMessage className="text-red-700" />
                      </FormItem>
                    )}
                  />
                  <div className="mt-8 flex gap-2">
                    {certificationFields.length > 1 && (
                      <MinusCircleIcon
                        className="h-8 w-8"
                        type="button"
                        onClick={() => removeCertification(index)}
                      />
                    )}
                    <PlusCircleIcon
                      className="h-8 w-8"
                      type="button"
                      onClick={() =>
                        appendCertification({
                          title: "",
                          company: "",
                          issue: "",
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full bg-cyan-700  hover:bg-cyan-600 "
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
