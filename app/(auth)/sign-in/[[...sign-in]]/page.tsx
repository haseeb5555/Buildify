'use client'

import { SignIn } from "@clerk/nextjs";
// import { useSearchParams,useRouter } from "next/navigation";

export default function Page() {
    // const searchParams = useSearchParams()
    // const router = useRouter()
    // const isSeller = searchParams.get('as') === 'contractor'

    // if (isSeller) {
    //    router.push('/contractor')
    // }else{
    //     router.push('/client')
    // }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignIn />
        </div>)
}