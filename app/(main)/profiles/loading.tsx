
import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="p-6 flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-gray-900" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px] bg-gray-900" />
          <Skeleton className="h-4 w-[150px] bg-gray-900" />
        </div>
      </div>
      <div className="space-y-6 p-6">
        <div>
          <Skeleton className="h-5 w-[100px] mb-2 bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-[90%] bg-gray-900" />
            <Skeleton className="h-4 w-[80%] bg-gray-900" />
          </div>
        </div>
        <div>
          <Skeleton className="h-5 w-[100px] mb-2 bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-[90%] bg-gray-900" />
            <Skeleton className="h-4 w-[80%] bg-gray-900" />
          </div>
        </div>
        <div>
          <Skeleton className="h-5 w-[100px] mb-2 bg-gray-900" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-gray-900" />
            <Skeleton className="h-4 w-[90%] bg-gray-900" />
            <Skeleton className="h-4 w-[80%] bg-gray-900" />
          </div>
        </div>
        <div>
          <Skeleton className="h-5 w-[100px] mb-2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  )
}