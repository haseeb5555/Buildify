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
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const PostValidation = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  budget: z.string().nonempty({ message: "Budget is required" }),
  TotalAmount: z.string().nonempty({ message: "Total Amount is required" }),
  milestones: z.array(
    z.object({
      name: z.string().nonempty({ message: "Name is required" }),
      description: z.string().nonempty({ message: "Description is required" }),
      amount: z.string().nonempty({ message: "Amount is required" }),
      due: z.string().nonempty({ message: "Due Date is required" }),
      value: z.number(),
    })
  ),
  author: z.string().optional(),
});

const InitProject = ({ author }: { author: string }) => {
  const router = useRouter();
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof PostValidation>) => {
      const res = await fetch("/api/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      toast.success("Project initiated successfully");
      router.push("/windows");
    },
    onError: () => {
      return toast.error("Something went wrong");
    },
  });
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
    mutate({
      title: values.title,
      description: values.description,
      budget: values.budget,
      TotalAmount: values.TotalAmount,
      milestones: values.milestones,
      author,
    }),
      form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col   gap-10"
      >
        <h1 className="font-bold text-[35px] text-cyan-700 -mb-6">
          Contract done? Initiate separate window with client to start a new
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
              <FormMessage className="text-red-700" />
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
              <FormMessage className="text-red-700" />
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
                <Input min={0} type="number" {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        <div>
          <FormLabel className="  font-bold text-[18px] text-cyan-700">
            Milestones
          </FormLabel>
          {milestoneFields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-4">
              <FormField
                control={control}
                name={`milestones.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl className="no-focus border border-dark-4">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="text-red-700" />
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
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-700" />
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
                      <Input min={0} {...field} type="number" />
                    </FormControl>
                    <FormMessage className="text-red-700" />
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
                      <Input {...field} type="date" />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />

              <div className="mt-4 mb-4 flex gap-2">
                {milestoneFields.length > 1 && (
                  <MinusCircleIcon
                    onClick={() => removeMilestone(index)}
                    className="cursor-pointer h-8 w-8"
                  />
                )}
                <PlusCircleIcon
                  onClick={() =>
                    appendMilestone({
                      name: "",
                      description: "",
                      amount: "",
                      due: "",
                      value: 0,
                    })
                  }
                  className="cursor-pointer h-8 w-8"
                />
              </div>
            </div>
          ))}
        </div>

        <FormField
          control={form.control}
          name="TotalAmount"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold">Total Amount</FormLabel>
              <FormControl className="no-focus border border-dark-4">
                <Input min={0} type="number" {...field} />
              </FormControl>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          type="submit"
          className=" bg-cyan-700 hover:bg-cyan-600 text-black dark:text-light-1"
        >
          {isPending ? "Initiating..." : "Initiate"}
        </Button>
      </form>
    </Form>
  );
};

export default InitProject;
