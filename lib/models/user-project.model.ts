import mongoose from "mongoose";

const userProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    }
    ,{timestamps:true}
)

export const UserProject = mongoose.models.UserProject || mongoose.model('UserProject',userProjectSchema);