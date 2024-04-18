const mongoose = require('mongoose');

// Schema for individual chats
const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }, // User ID of sender
  role: { type: String, enum: ['client', 'freelancer'], required: true }, // Role of sender
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Schema for progress updates
const progressUpdateSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  isCompleted:{type:Boolean,required :true}
});

// Schema for rooms
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  chats: chatSchema,
  progressUpdates: progressUpdateSchema
});

// Model for rooms
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
