'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Textarea } from "../ui/textarea"


const formSchema = z.object({

  title: z.string().min(2, {

    message: "Title must be required.",
  }),
  company: z.string().min(2, {
    message: "Company must be required.",
  }),
    startDate: z.string().min(2, {
        message: "Start date must be required.",
    }),
    endDate: z.string().min(2, {
        message: "End date must be required.",
    }),
    description: z.string().min(2, {
        message: "Description must be required.",
    }),
 

})
export function ExperienceDialog() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
      })
     
 
      function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values)
      }


  return (
    <>
    <Dialog>
        <h1 className="text-[28px] font-bold ">Add Experience</h1>
        <p className="text-gray-1 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet ex rem voluptas fugit? Nesciunt dolorem repellat</p>
             
      <DialogTrigger asChild className="px-78 py-28 w-full mt-2">
         
        <Button variant="outline">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</Button>
      </DialogTrigger>
      <DialogContent className="w-fullsm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Experience</DialogTitle>
          <DialogDescription className="text-gray-1">
          Add Experince to grab the attention of recruiters
          </DialogDescription>
        </DialogHeader>
        <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-start flex-col ">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
            <FormLabel className="text-[16px] font-bold">Title</FormLabel>
              <FormControl className="Title">
                <Input placeholder="e.g:Constructor" {...field}
                 className="account-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
            <FormLabel className="text-[16px] font-bold">Company</FormLabel>
              <FormControl className="">
                <Input placeholder="e.g:Microsoft" {...field}
                 className="account-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full justify-between flex gap-2">

          <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
            <FormLabel className="text-[16px] font-bold">start date</FormLabel>
              <FormControl className="">
                <Input placeholder="start date" {...field}
                 className="w-[230px] account-form_input"
                 type="date"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
            <FormLabel className="text-[16px] font-bold">end date</FormLabel>
              <FormControl className="">
                <Input placeholder="end date" {...field}
                 className="w-[230px] account-form_input"
                 type="date"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
<FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
            <FormLabel className="text-[16px] font-bold">Description</FormLabel>
              <FormControl className="">
                <Textarea placeholder="Discription" {...field}
                 className=" account-form_input "
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
     
        <DialogFooter>
        <Button  variant="outline" className="mt-4">save</Button>
        </DialogFooter>
      </form>
    </Form>
      </DialogContent>
    </Dialog>
        <div className="mt-12 flex justify-between ">
          <Link href="/create-profile/title" >
       <Button  variant="outline">Back</Button>
        </Link>
        <Link href="/create-profile/" >

        <Button type="submit" variant="outline">Next</Button>
        </Link>
        </div>
        </>
  )
}
