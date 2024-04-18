import mongoose, { Schema } from "mongoose";


const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    totalAmount:{
        type: Number,
        default: 0
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    milestones:[
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
          due:  {
                type: Date,
                required: true
                
            }
         
        }
    ]
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);