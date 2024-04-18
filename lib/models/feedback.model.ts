import mongoose, { Schema } from "mongoose";


const feedbackSchema = new Schema({
    feedback: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    }, { timestamps: true });

const Feedback = mongoose.models.Feedback||mongoose.model('Feedback', feedbackSchema);

export default Feedback;