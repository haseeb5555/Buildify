'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Textarea } from '../ui/textarea'
import Link from 'next/link'
import { Button } from '../ui/button'

const formSchema = z.object({
    bio: z.string().min(2, {
        message: "Bio must be required.",
    }),
})
const Bio = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          bio: "",
        },
      })
     
 
      function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values)
      }
  return (
    <>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-start flex-col ">
         <h1 className='font-bold text-[35px] '>Craft Your Bio: Let the World Know Who You Are!</h1>
         <p className='text-[16px] text-gray-1'>Great. Now write a bio to tell the world about yourself.
Help people get to know you at a glance. What work do you do best? Tell them clearly, using paragraphs or bullet points. You can always edit later; just make sure you proofread now</p>
         <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
            <FormLabel className="text-[16px] font-bold">Bio</FormLabel>
              <FormControl className="">
                <Textarea placeholder="" {...field}
                 className=" account-form_input "
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
     
      </form>
    </Form>
      
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

export default Bio 