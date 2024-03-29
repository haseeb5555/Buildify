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
import { useRouter } from "next/navigation"
import { useLocalStorage } from "@/hooks/use-local-storage"

const formSchema = z.object({
  ntn: z.string().min(2, {
    message: "NTN must be required.",
  }),
})

export function NTN() {
  const router = useRouter()
  const [ntn, setNtn] = useLocalStorage('ntn', "")
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         ntn: "",
        },
      })
     
 
      function onSubmit(values: z.infer<typeof formSchema>) {
            setNtn(values.ntn)
            console.log(values)
            router.push('/create-profile/certification')
      }


  return (

    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-start flex-col gap-4">
        <FormField
          control={form.control}
          name="ntn"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
                 <h1 className="text-[50px] font-bold leading-[50px]">Tell us what is your NTN Number.</h1>
                 <p className="text-gray-1 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet ex rem voluptas fugit? Nesciunt dolorem repellat</p>
              <FormControl className="">
                <Input placeholder="NTN" {...field}
                type="text"
                 className="account-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between ">
        <Button  variant="outline">Back</Button>
        
        <Button type="submit" variant="outline">Next</Button>
       
        </div>
      </form>
    </Form>
    

  )
}
