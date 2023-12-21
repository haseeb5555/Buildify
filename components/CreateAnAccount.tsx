"use client";
import React, { useState } from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";
import { Button } from "./ui/button";
import { redirect, useRouter } from "next/navigation";

const CreateAnAccount = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState("Create An Account");
  const route = useRouter()

  
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-20 justify-center items-center flex-col p-20 border-1 rounded-lg shadow-lg shadow-purple-700">
        <h2 className="font-bold  text-[36px]   text-center max-sm:text-[40px] max-lg:text-[46px]">
          Join As Client or Builder
        </h2>
        <div className="flex gap-8 justify-center items-center">
          <div>
            <Checkbox
           
              classNames={{
                base: cn(
                  "inline-flex w-full max-w-md bg-transparent border",
                  "hover:bg-content2 items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
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
                  "hover:+ items-center justify-start",
                  "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
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

          <Button  className="w-full bg-purple-700 hover:bg-purple-600 " disabled={isDisabled} onClick={text==='Create An Account As Builder'?()=>route.push('/sign-up?as=builder'):()=>route.push('/sign-up?as=client')
        
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
