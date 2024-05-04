import { image } from "@nextui-org/react";
import mongoose, { Schema, Document } from "mongoose";

interface Experience {
  title: string;
  company: string;
  from: Date;
  to: Date;
}

interface Certification {
  title: string;
  company: string;
  issue: Date;
}

interface Project {
  image: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface User extends Document {
  id: string;
  name: string;
  title: string;
  company: string;
  ntn: string;
  cnic: string;
  phone: string;
  bio: string;
  image: string;
  onboarded: boolean;
  experience: Experience[];
  certification: Certification[];
  projects: Project[];
  feedback: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  rooms: mongoose.Types.ObjectId[];
  messages: mongoose.Types.ObjectId[];
}

const experienceSchema: Schema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
});

const certificationSchema: Schema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  issue: { type: Date, required: true },
});

const projectSchema: Schema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const userSchema: Schema = new Schema({
  id: { type: String, required: true},
  name: { type: String,  },
  title: { type: String, required: true },
  company: { type: String, required: true },
  ntn: { type: String, required: true },
  cnic: { type: String, required: true },
  phone: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
  onboarded:{
    type:Boolean,
    default:false
   },
  experience: [experienceSchema],
  certification: [certificationSchema],
  projects: [{ type: Schema.Types.ObjectId, ref: "UserProject" }],
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  rooms: [{ type: Schema.Types.ObjectId, ref: "Window" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Profile = mongoose.models.Profile || mongoose.model<User>("Profile", userSchema);

export default Profile;
