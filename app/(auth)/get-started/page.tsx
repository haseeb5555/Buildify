import CreateAnAccount from "@/components/CreateAnAccount";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const GetStartedPage = async() => {
 
  return(

    <CreateAnAccount />
  )
};


export default GetStartedPage;
