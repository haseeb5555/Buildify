import { z } from "zod"

export const ThreadValidation = z.object({

    thread: z.string().nonempty().min(3),
    accountId: z.string(),
    image: z.string().optional() || undefined

})
export const CommentValidation = z.object({

    thread: z.string().nonempty().min(3),


})



export const UserValidation = z.object({

    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {
        message: "Name must be atleast 3 characters"
    }).max(20),
    username: z.string().min(3, {
        message: "Username must be atleast 3 characters"
    }).max(30),
    bio: z.string().min(10, {
        message: "Bio must be atleast 10 characters"
    }).max(100)
})