"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be required.",
  }),
})

export function Title() {
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

    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-start flex-col gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
                 <h1 className="text-[50px] font-bold leading-[50px]">Tell the World what you want to do.</h1>
                 <p className="text-gray-1 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet ex rem voluptas fugit? Nesciunt dolorem repellat</p>
              <FormControl className="">
                <Input placeholder="Constructor" {...field}
                 className="account-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between ">
        <Button  variant="outline">Back</Button>
        <Link href="/create-profile/employment" >
        <Button type="submit" variant="outline">Next</Button>
        </Link>
        </div>
      </form>
    </Form>
    

  )
}
