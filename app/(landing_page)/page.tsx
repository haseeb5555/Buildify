import CreateAnAccount from '@/components/CreateAnAccount'
import CustomButton from '@/components/CustomButton'
import CustomerReviews from '@/components/CustomerReviews'
import { Hero } from '@/components/Hero'
import Services from '@/components/Services'
import Why from '@/components/why-to-choose-us'



export default async function Home() {

  return (
    <>
   
      <Hero />
      <Services />
      <Why />
      <CustomerReviews />
    </>
  )
}
