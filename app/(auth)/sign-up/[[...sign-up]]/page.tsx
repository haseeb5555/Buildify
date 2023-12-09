'use client'

import { SignUp } from "@clerk/nextjs";
import { useSearchParams,useRouter } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSeller = searchParams.get('as') === 'contractor'
    if (isSeller) {
       router.push('/sign-in?as=contractor')
    }else{
        router.push('/sign-in?as=client')
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
          
            <SignUp/>;
        </div>)
}