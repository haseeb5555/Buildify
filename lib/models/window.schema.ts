import mongoose from "mongoose";;

const WindowSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: String, required: true },
    TotalAmount: { type: String, required: true },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true, 
    },
    milestones: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            amount: { type: String, required: true },
            due: { type: String, required: true },
            value:{type: Number, required: true}
        },
    ],

});

const Window = mongoose.models.Window||mongoose.model("Window", WindowSchema);

export default Window
