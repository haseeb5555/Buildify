import mongoose from 'mongoose';


let isConnected: boolean = false;   

export const connectToDB = async () => {
   if(!process.env.DATABASE_URL) return console.log('MONGO_URI must be defined')
   
   if(isConnected) return console.log('already connected to db');

   try {
     await mongoose.connect(process.env.DATABASE_URL);
        isConnected = true;
        console.log('connected to db');
   } catch (error:any) {
         console.log(error);
   }

      
   
}
