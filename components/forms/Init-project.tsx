'use client'

import { useForm } from "react-hook-form";

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
import Link from "next/link";



const PostValidation = z.object({
    title: z.string().nonempty({ message: "Title is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    budget: z.string().nonempty({ message: "Budget is required" }),
    TotalAmount: z.string().nonempty({ message: "Total Amount is required" }),
    milestones: z.array(z.object({
        srNo: z.number(),
        title: z.string(),
        description: z.string(),
        amount: z.string(),
        
    }))
}); 

const InitProject= () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            title: "",
            description: "",
            budget: "",
            milestones: [],
          
       
          
        },
    });

    const onSubmit = async (values: z.infer<typeof PostValidation>) => {
        
        router.push('/room');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 flex flex-col   gap-10">
                <h1 className="font-bold text-[35px] -mb-6">Contract done? initiate seperate window with client to start a new journey</h1>
            
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
                <h2 className="text-base-semibold">Milestones</h2>
                   <Dialog>
      <DialogTrigger asChild >
        <Button variant="outline" className="w-12"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</Button>
 
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full">
        <DialogHeader>
          <DialogTitle className="">Add Milestones</DialogTitle>
         
        </DialogHeader>
        <div className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Title</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input />
                            </FormControl>
                            <FormMessage />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Description</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Textarea rows={3} />
                            </FormControl>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Amount</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input type="number" />
                            </FormControl>
                            <FormMessage />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Due Date</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input type="date" />
                            </FormControl>
                            <FormMessage />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Milestone Image</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input type="file" />
                            </FormControl>
                            <FormMessage />
                        </div>
        
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <FormField
                    control={form.control}
                    name="TotalAmount"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold">Total Amount</FormLabel>
                            <FormControl className="no-focus border border-dark-4">
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              
             
                <Button type="submit" className="dark:bg-primary-500 bg-slate-200 text-black dark:text-light-1">
                    Initiate
                </Button>
                
            </form>
        </Form>
    );
};

export default InitProject;
