import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const ContactCard = () => {
  return (
    <div className='w-full flex flex-col gap-4 shadow-lg border px-8 py-4 '>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src="/assets/images/user.png"
              alt="user image"
              fill
              className="rounded-full object-cover shadow-2xl"

            />
          </div>
<<<<<<< HEAD
            <div className="flex-1">
             <h2 className="text-left text-heading3-bold ">name</h2>
             <p   className="text-gray-1 text-base-medium">Offline <span>time</span></p>
            </div>
       </div>
    </div>
       <Button  variant="ghost" className='dark:bg-purple-700 bg-green-700'>
     
             Contact Me
       </Button>
=======
          <div className="flex-1">
            <h2 className="text-left text-heading3-bold ">name</h2>
            <p className="text-gray-1 text-base-medium">Offline <span>time</span></p>
          </div>
        </div>
      </div>
      <Button className='dark:bg-purple-700 bg-green-700 hover:bg-green-800 dark:hover:bg-purple-800'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" role="img"><path clip-rule="evenodd" d="M15.48.423a.75.75 0 0 1 .255.724l-2.8 14a.75.75 0 0 1-1.186.453l-3.982-2.987-2.465 2.875A.75.75 0 0 1 3.982 15l.005-5.598a.75.75 0 0 1 .333-.623l4.196-2.803a.75.75 0 1 1 .833 1.248L6.034 9.438l5.663 4.248 2.296-11.475L2.517 6.8l.801.6a.75.75 0 1 1-.9 1.2L.55 7.201A.75.75 0 0 1 .72 5.903l14-5.6a.75.75 0 0 1 .758.12Zm-9.994 10.48-.002 2.068 1.08-1.26-1.078-.809Z"></path></svg>
        <span className='ml-1'>Contact Me </span>
      </Button>
>>>>>>> 00534a3cb0c995e27d8d6b0d4dee7d2f2f84a28b

    </div>
  )
}

export default ContactCard