import CreateAnAccount from "@/components/CreateAnAccount";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const GetStartedPage = async() => {
  const user =await currentUser()
  if (user){
    redirect("/profileDetail")
  }
  return(

    <CreateAnAccount />
  )
};


export default GetStartedPage;
