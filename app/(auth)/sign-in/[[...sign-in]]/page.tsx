'use client'

import { SignIn } from "@clerk/nextjs";
import { useSearchParams,useRouter } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isBuilder= searchParams.get('as') === 'builder'

 
    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignIn 
            afterSignInUrl={isBuilder?'/create-profile/title':'/create-profil/title'}
            />
        </div>)
}