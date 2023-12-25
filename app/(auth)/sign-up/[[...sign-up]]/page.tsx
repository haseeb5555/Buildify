
'use client'
import { SignUp } from "@clerk/nextjs";
import { useSearchParams, useRouter } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()

    const isBuilder = searchParams.get('as') === 'builder'


    return (
        <div className="flex justify-center items-center min-h-screen">

          
            <SignUp afterSignUpUrl={
                isBuilder?'/sign-in?as=builder':'/sign-in?as=client'

            }/>


        </div>)
}