import mongoose from "mongoose";


const chatroomSchema = new mongoose.Schema({    
  createdAt:{
    type:Date,
    default:Date.now
},

  users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile"
  }

],
  messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message"
  }]

}
)

export const ChatRoom=mongoose.models.ChatRoom||mongoose.model('ChatRoom',chatroomSchema)