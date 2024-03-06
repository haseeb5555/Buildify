import { Schema, model, models } from 'mongoose'

export const postSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' }, // Add reference to the user model
    description: { type: String, required: true },
    budget: { type: String, required: true },
    time: { type: String, required: true },
    expertiseLevel: { type: String, required: true },
    skills: { type: String, required: true },
})


export const Post = models.Post || model('Post',postSchema);
