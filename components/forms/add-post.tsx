'use client'

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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
// import { toast, Toaster } from "sonner";
import { useState } from "react";
import Image from "next/image";


const PostValidation = z.object({
    title: z.string().nonempty({ message: "Title is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    budget: z.string().nonempty({ message: "Budget is required" }),
    time: z.string().nonempty({ message: "Time is required" }),
    expertiseLevel: z.string().nonempty({ message: "Expertise level is required" }),
    skills: z.string().nonempty({ message: "Skills are required" }),
}); 

const AddPostForm = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            title: "",
            description: "",
            budget: "",
            time: "",
            expertiseLevel: "",
            skills: "",
            image:""
        },
    });

    const onSubmit = async (values: z.infer<typeof PostValidation>) => {
        
        router.push('/projects');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 flex flex-col   gap-10">
                <h1 className="font-bold text-[35px] -mb-6">Tell us what you need done</h1>
                <p className="text-[16px] text-gray-1">Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work</p>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Title</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
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
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Time</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="expertiseLevel"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Expertise Level</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
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
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="">{

                field.value&&(
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
                )
          }
          </FormLabel>
              <FormControl className="flex-1 text-base-semibold ">
                <Input
                type="file"
                accept="image/*"
                placeholder="Upload a photo"
                className=""
                // onChange={(e)=>handleImage(e,field.onChange)}
                
                />
              </FormControl>
            </FormItem>
          )}
        />  
                <Button type="submit" className="dark:bg-primary-500 bg-slate-200 text-black dark:text-light-1">
                    Post Project
                </Button>
            </form>
        </Form>
    );
};

export default AddPostForm;
