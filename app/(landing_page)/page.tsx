import CustomerReviews from "@/components/CustomerReviews";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/why-to-choose-us";
import { clerkClient, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    const userInfo = await clerkClient.users.getUser(user.id);
    if (!userInfo) return null;
    const userMetadata = userInfo.privateMetadata;
    if (userMetadata.role === "client") {
      redirect("/posts");
    }
    if (userMetadata.role === "constructor") {
      redirect("/jobs");
    }
  }

  return (
    <>
      <Hero />
      <Services />
      <Why />
      <CustomerReviews />
    </>
  );
}
