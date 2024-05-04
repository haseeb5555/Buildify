"use client";
import { Checkbox, Link, cn } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const CreateAnAccount = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState("Create An Account");
  const route = useRouter()

  
  return (
    <div className="flex justify-center items-center">
      <div className="flex  justify-center items-center flex-col  gap-20 p-20 border-1 rounded-lg shadow-lg shadow-purple-700">
        <h2 className="font-bold  text-[36px]   text-center max-sm:text-[40px] max-lg:text-[46px]">
          Join As 
        </h2>
        <Separator className="my-4 bg-gray-1 w-28 -mt-20" />
        <div className="flex gap-8 justify-center items-center ">
          <div>
            <Checkbox
           
              classNames={{
                base: cn(
                  "inline-flex w-full max-w-md bg-transparent border",
                  "hover:bg-content2 items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 px-4 py-12 border-2 border-transparent",
                  "data-[selected=true]:border-primary"
                ),
                label: "w-full",
              }}
              isSelected={text==='Create An Account As Client'&&isSelected}
              onValueChange={()=>{setIsSelected(true)
                                  setIsDisabled(false)
               }}
              onClick={() => 
                setText("Create An Account As Client")
                
              
           }
            >
               <p>Create An Account as a client</p>
            </Checkbox>
          </div>
          <div>
            <Checkbox
             
              classNames={{
                base: cn(
                  "inline-flex w-full max-w-md bg-transparent",
                    
                  "cursor-pointer rounded-lg gap-2 px-4 py-12 a border-2 border-transparent" ,
                  "data-[selected=true]:border-primary"
                ),
                label: "w-full",
              }}
              isSelected={text==='Create An Account As Builder'&&isSelected}
              onValueChange={()=>{setIsSelected(true)
                                  setIsDisabled(false)
              
              }}
              onClick={() => setText("Create An Account As Builder")}
            >
              
              <p>Create An Account as a builder</p>
            </Checkbox>
          </div>
        </div>
        <div className={`flex flex-col gap-4 justify-center items-center ${isDisabled?'cursor-not-allowed':null}`} >

          <Button  className="w-full bg-purple-700 hover:bg-purple-600 " disabled={isDisabled} onClick={text==='Create An Account As Builder'?()=>route.push('/sign-in?as=builder'):()=>route.push('/sign-in?as=client')
        
        } >
            {text}
          </Button >
          <p className="flex gap-1 m-0">
            Already have an account?
            <Link href="/sign-in" className="hover:underline cursor-pointer">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
