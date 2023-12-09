
import mongoose  from "mongoose";


export const userSchema =  new mongoose.Schema({
  id :{type:String, required:true},
  username :{type:String, required:true, unique:true},
  name:{type:String, required:true},
  type:{type:String, required:true},    //buyer or seller
  bio :String,
  image:String,
   onboarded:{
    type:Boolean,
    default:false
   }
})

const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;
