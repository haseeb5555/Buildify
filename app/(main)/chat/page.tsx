import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex flex-col-reverse pb-4 pt-6 px-4 overflow-y-auto">
        <div className="flex items-end justify-start mb-4 space-x-2">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="/assets/images/user.png" />
          </Avatar>
          <div className="flex flex-col text-sm">
            <p className="px-6 py-3 rounded-tl-lg rounded-tr-lg rounded-br-lg ring-1 text-gray-800">
            
            </p>
            <p className="text-xs text-gray-500 mt-1">8:58 AM</p>
          </div>
        </div>
        <div className="flex items-end justify-end mb-4 space-x-2">
          <div className="flex flex-col text-sm">
            <p className="px-6 py-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg ring-1 text-white">
              I need help with my homework.
            </p>
            <p className="text-xs text-gray-500 mt-1 text-right">8:59 AM</p>
          </div>
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="/assets/images/user.png" />
          </Avatar>
        </div>
        <div className="flex items-end justify-start mb-4 space-x-2">
        <Avatar className="h-10 w-10 rounded-full ">
            <AvatarImage src="/assets/images/user.png" />
          </Avatar>
          <div className="flex flex-col text-sm">
            <p className="px-6 py-3 rounded-tl-lg rounded-tr-lg rounded-br-lg ring-1 text-gray-800">
              Sure, I'd be happy to help! What's your homework about?
            </p>
            <p className="text-xs text-gray-500 mt-1">9:00 AM</p>
          </div>
        </div>
      </main>
      <div className="mt-auto px-4 py-2  border-t">
        <div className="flex items-center">
          <Textarea className="flex-grow mr-4 rounded-lg border" placeholder="Type your message" />
          <Button className="flex-none">Send</Button>
        </div>
      </div>
    </div>
  )
}
