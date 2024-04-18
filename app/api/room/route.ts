import { connectToDB } from "@/lib/models/connection";
import Profile from "@/lib/models/profile.model";
import Window from "@/lib/models/window.schema";
import { NextRequest, NextResponse } from "next/server";


export async function  POST (req:NextRequest){
    try {
        connectToDB()
        const {title,description,budget,TotalAmount,milestones,author} = await req.json()
     const  createdWindow=  await Window.create({
            title,
            description,
            budget,
            author,
            TotalAmount,
            milestones,
        })

        await Profile.findByIdAndUpdate(author, {
            $push: { rooms: createdWindow._id },
          });

        return NextResponse.json({message:"Window created successfully"})

        
    } catch (error) {
        console.log(error)
    }

}

export async function GET(){
    try {
        connectToDB()
        const windows = await Window.find()
        return NextResponse.json(windows)
    } catch (error) {
        console.log(error)
    }
}

