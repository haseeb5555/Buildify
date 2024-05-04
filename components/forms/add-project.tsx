'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogTrigger,DialogContent } from "../ui/dialog"
import { FormField } from "../ui/form"
import { isBase64Image } from "@/lib/utils"
import { ChangeEvent, useState } from "react"
import { useUploadThing } from "@/lib/uploadthing"
import { createProject } from "@/actions/profile.action"
import { usePathname } from "next/navigation"

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    })

export default function AddProject({author}:{author:string}) {
  const [files, setFiles] = useState<File[]>([])
  const {startUpload}= useUploadThing('media');
  const pathname = usePathname()
    const form = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: {
        title: '',
        description: '',
        image: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof projectSchema>) => {
      const blob = values.image
      const hasIsImageChanged = isBase64Image(blob)
  
      if (hasIsImageChanged){
  
        const imgRes= await startUpload(files)
  
        if (imgRes && imgRes[0].fileUrl)
        {
          values.image = imgRes[0].fileUrl
        }
      }
       await createProject({
        title: values.title,
        description: values.description,
        image: 'https://via.placeholder.com/150',
        author:author,
        path:pathname
       }) 
    }
    const handleImage=(e:ChangeEvent<HTMLInputElement>,fieldChange:(value:string)=>void)=>{
      e.preventDefault();
      const fileReader = new FileReader();
      if (e.target.files && e.target.value.length>0){
        const file = e.target.files[0];
  
        setFiles(Array.from(e.target.files))
  
        if (!file.type.includes('image')) return;
  
        fileReader.onload = async (event)=>{
  
        const imageDataUrl = event.target?.result?.toString()|| ''
  
        fieldChange(imageDataUrl)
        }
  
        fileReader.readAsDataURL(file)
      }
   }

  return (
    <div className="flex justify-center">
       <Dialog>
       <DialogTrigger>
         <Button>Add Project</Button>    
        </DialogTrigger> 
       <DialogContent > 
      <Card className="w-full max-w-md border-none">
        <CardHeader>
          <CardTitle>Add New Project</CardTitle>
          <CardDescription>Fill out the form to create a new project.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-1.5">
              <Label htmlFor="title">Title</Label>
               <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <Input {...field} id="title" placeholder="Enter project title" />
                )}
               />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="description">Description</Label>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                    <Textarea {...field} id="description" placeholder="Enter project description" />
                    )}
                />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="image">Image</Label>
                
            </div>
            <Button className="justify-self-end" type="submit">
              Create Project
            </Button>
          </form>
        </CardContent>
      </Card>
        </DialogContent>
      </Dialog> 
    </div>
  )
}