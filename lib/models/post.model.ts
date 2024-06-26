import mongoose from "mongoose"

export const PostSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    budget:{type:String,required:true},
    skills:
        {
            type:String,
            required:true
        } ,
    image:String,
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true, 
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    parentId:{
        type:String
    },
     children:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
     ]
})


const Post = mongoose.models.Post|| mongoose.model('Post',PostSchema);

export default Post;