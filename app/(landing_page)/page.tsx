import CustomerReviews from '@/components/CustomerReviews'
import { Hero } from '@/components/Hero'
import Services from '@/components/Services'
import Why from '@/components/why-to-choose-us'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'



export default async function Home() {
  const user =await currentUser()
  if (user){
    redirect("")
  }

  return (
    <>
   
      <Hero />
      <Services />
      <Why />
      <CustomerReviews />
    </>
  )
}
