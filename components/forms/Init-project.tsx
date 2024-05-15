"use client";

import { useFieldArray, useForm } from "react-hook-form";

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
import { Button } from "@/components/ui/button";

const PostValidation = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  budget: z.string().nonempty({ message: "Budget is required" }),
  TotalAmount: z.string().nonempty({ message: "Total Amount is required" }),
  milestones: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      amount: z.string(),
      due: z.string(),
      value: z.number()
    })
  ),
});

const InitProject = ({ author }: { author: string }) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      title: "",
      description: "",
      budget: "",
      TotalAmount: "",
      milestones: [
        {
          name: "",
          description: "",
          amount: "",
          due: "",
          value: 0,
        },
      ],
    },
  });
  const { control } = form;
  const {
    fields: milestoneFields,
    append: appendMilestone,
    remove: removeMilestone,
  } = useFieldArray({
    control,
    name: "milestones",
  });


    const onSubmit = async (values: z.infer<typeof PostValidation>) => {
         await fetch('/api/room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: values.title,
                description: values.description,
                budget: values.budget,
                TotalAmount: values.TotalAmount,
                milestones: values.milestones,
                author
                
            }),
        }
         )
         console.log(author)
        router.push('/room')
    }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col   gap-10"
      >
        <h1 className="font-bold text-[35px] -mb-6">
          Contract done? initiate seperate window with client to start a new
          journey
        </h1>

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
        <div>
          <FormLabel>Milestones</FormLabel>
          {milestoneFields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-4">
              <FormField
                control={control}
                name={`milestones.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl className="no-focus border border-dark-4">
                      <Input placeholder="Enter Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={`milestones.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl className="no-focus border border-dark-4">
                      <Input placeholder="Enter Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`milestones.${index}.amount`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl className="no-focus border border-dark-4">
                      <Input
                        placeholder="Enter Amount"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={`milestones.${index}.due`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <FormControl className="no-focus border border-dark-4">
                      <Input
                        placeholder="Enter Due Date"
                        {...field}
                        type="date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-start mb-5">
                <Button type="button" onClick={() => removeMilestone(index)}>
                  Remove Milestone
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              appendMilestone({
                name: "",
                description: "",
                amount: "",
                due: "",
                value:0
              })
            }
          >
            Add Milestone
          </Button>
        </div>

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

        <Button
          type="submit"
          className="dark:bg-primary-500 bg-slate-200 text-black dark:text-light-1"
        >
          Initiate
        </Button>
      </form>
    </Form>
  );
};

export default InitProject;
