
import AccountProfile from '@/components/forms/AcountProfile';
import {currentUser} from '@clerk/nextjs'

async function Page() {
    
    const user = await currentUser();
    const userInfo={};

    const userData ={

        id:user?.id,
        objectId:userInfo?._id,
        username:userInfo?.username || user?.username,
       name:userInfo?.name||user?.firstName||"",
       bio:userInfo?.bio || "",
       image :userInfo?.image || user?.imageUrl
    }
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start py-20 px-10">
            <h1 className="head-text">Onboarding</h1>
               <p className="mt-2 base-text-regular">
                Complete your file to use app
               </p>
               <section className="mt-9  p-10">
                 <AccountProfile user={userData} btnTitle="Continue"/>
               </section>
        </main>
    )
}

export default Page;