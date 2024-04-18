import mongoose from "mongoose"


export const commentSchema = new mongoose.Schema({
    text:{type:String,required:true},
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


const Comment = mongoose.models.Comment|| mongoose.model('Comment',commentSchema);

export default Comment;