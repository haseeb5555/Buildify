'use client'

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
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createProfile } from "@/actions/profile.action";
import { usePathname, useRouter } from "next/navigation";
import{PlusCircleIcon,MinusCircleIcon} from 'lucide-react'



export const ProfileSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  ntn: z.string().min(3, {
    message: "NTN must be 11 characters.",
  }),
  cnic: z.string().min(3, {
    message: "CNIC must be 13 characters.",
  }),
  phone: z.string().min(3, {
    message: "Phone must be 11 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),

  experience: z.array(
    z.object({
      title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
      }),
      company: z.string().min(2, {
        message: "Company must be at least 2 characters.",
      }),
      from: z.string(),
      to: z.string(),
    })
  ),
  certification: 
  z.array(
    z.object({
      title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
      }),
      company: z.string().min(2, {
        message: "Company must be at least 2 characters.",
      }),
      issue: z.string(),
     
    })
  )
})
  
export type ProfileFormValues = z.infer<typeof ProfileSchema>;

export default function ProfileForm({user}:{user:any}) {
 const path = usePathname()
  const router = useRouter()
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

  const { control, handleSubmit ,register} = form;
  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: "experience",
  });
  const { fields: certificationFields, append: appendCertification, remove: removeCertification } = useFieldArray({
    control,
    name: "certification",
  });
console.log(user)
  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
 
       await createProfile(
          {
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
          }
       );

       router.push('/jobs')
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="flex gap-8">
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" {...field} className="account-form_input" />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Enter company" {...field} className="account-form_input" />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Enter CNIC" {...field} className="account-form_input" type="number" />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Enter NTN" {...field} className="account-form_input" type="number" />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Enter phone" {...field} className="account-form_input" type="number" />
                </FormControl>
                <FormMessage />
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
                  <Textarea placeholder="Enter bio" {...field} rows={7} className="account-form_input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormLabel>Experience</FormLabel>
          {experienceFields.map((field, index) => (
             <>
            <div key={field.id} className="flex  gap-4">
              <FormField
                control={control}
                name={`experience.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Enter company" {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Enter from" {...field} className="account-form_input" type="date" />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Enter to" {...field} className="account-form_input" type="date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-8 flex gap-2">

              <MinusCircleIcon onClick={() => removeExperience(index)}
               className="cursor-pointer h-8 w-8"
              />
              <PlusCircleIcon onClick={() => appendExperience({ title: "", company: "", from: "", to: "" })}
               className="cursor-pointer h-8 w-8"
              />
              </div>
              </div>
             </>
          ))}
        </div>

        <div>
          <FormLabel>Certification</FormLabel>
          {certificationFields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-4">
              <FormField
                control={control}
                name={`certification.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Enter company" {...field} className="account-form_input" />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Enter issue" {...field} className="account-form_input" type="date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="button" onClick={() => removeCertification(index)}>
                Remove Certification
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => appendCertification({ title: "", company: "", issue: "" })}>
            Add Certification
          </Button>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
