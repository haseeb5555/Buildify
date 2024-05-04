'use server'


import { connectToDB } from "@/lib/models/connection";
import Profile from "@/lib/models/profile.model";
import { Project } from "@/lib/models/project.model";
import { UserProject } from "@/lib/models/user-project.model";
import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

interface Experience {
    title: string;
    company: string;
    from: string;
    to: string;
  }
  
  interface Certification {
    title: string;
    company: string;
    issue: string;
  }
  
  interface Project {
    image: string;
    title: string;
    description: string;
    createdAt: Date;
  }

interface Params {

    userId: string;
    name: string;
    image: string;
    title: string;
    company: string;
    ntn: string;
    cnic: string;
    phone: string;
    bio: string;
    path: string;
    projects: Project[];
    experience: Experience[];
    certification: Certification[];
}

export async function createProfile(
    
    {
    name,
    image,
    userId ,   
    title,
    company,
    ntn,
    cnic ,
    phone,
    bio,
    experience,
    path,
    projects,
    certification,
    }: Params
    
    ) :Promise<void> {
        try {


        await connectToDB();

        await Profile.findOneAndUpdate(
            { id: userId },
            {   
                name,
                image,
                title,
                company,
                ntn,
                cnic,
                phone,
                bio,
                experience,
                certification,
                projects,

              onboarded: true,
            },
            { upsert: true }
          );
      
          if (path === "/profile/edit") {
            revalidatePath(path);
          }
        } catch (error: any) {
          console.log(error);
        }
    }  
   
    
export async function fetchConstructor(userId: string) {
  try {
    connectToDB();

    return await Profile.findOne({ id: userId })
  } catch (error: any) {
    console.log(error);
  }
}


    export async function fetchConstructors({
        userId,
        searchString = "",
        pageNumber = 1,
        pageSize = 20,
        sortBy = "desc",
      }: {
        userId: string;
        searchString?: string;
        pageNumber?: number;
        pageSize?: number;
        sortBy?: SortOrder;
      }) {
        try {
          connectToDB();
      
          // Calculate the number of users to skip based on the page number and page size.
          const skipAmount = (pageNumber - 1) * pageSize;
      
          // Create a case-insensitive regular expression for the provided search string.
          const regex = new RegExp(searchString, "i");
      
          // Create an initial query object to filter users.
          const query: FilterQuery<typeof Profile> = {
            id: { $ne: userId }, // Exclude the current user from the results.
          };
      
          // If the search string is not empty, add the $or operator to match either username or name fields.
          if (searchString.trim() !== "") {
            query.$or = [
              { username: { $regex: regex } },
              { name: { $regex: regex } },
            ];
          }
      
          // Define the sort options for the fetched users based on createdAt field and provided sort order.
          const sortOptions = { createdAt: sortBy };
      
          const usersQuery = Profile.find(query)
            .sort(sortOptions)
            .skip(skipAmount)
            .limit(pageSize);
      
          // Count the total number of users that match the search criteria (without pagination).
          const totalUsersCount = await Profile.countDocuments(query);
      
          const users = await usersQuery.exec();
      
          // Check if there are more users beyond the current page.
          const isNext = totalUsersCount > skipAmount + users.length;
      
          return { users, isNext };
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error;
        }
      }
  
      interface UserProject {
        title: string;
        description: string;
        image: string;
        author: string;
        path:string
      }

      export async function createProject({ title, description,image,author,path}: UserProject,
      ) {
        try {
          connectToDB();
          const createdProject = await UserProject.create({
              title,
              description,
              image// Assign communityId if provided, or leave it null for personal account
          });
          await Profile.findByIdAndUpdate(author, {
            $push: { projects: createdProject._id },
          });
          revalidatePath(path);
        } catch (error: any) {
           console.log(error);
        }
      }
      