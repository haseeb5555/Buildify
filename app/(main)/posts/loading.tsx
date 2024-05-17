import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col space-x-4 gap-8">
      <div className="flex ga">
        <Skeleton className="h-12 w-12 rounded-full bg-gray-700" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px] bg-gray-700" />
          <Skeleton className="h-4 w-[200px] bg-gray-700" />
          <Skeleton className="h-12 w-[700px] bg-gray-700" />
        </div>
      </div>
      <div className="ml-12 flex gap-4 ">
        <Skeleton className="h-4 w-4 bg-gray-700 rounded-full" />
        <Skeleton className="h-4 w-4 bg-gray-700 rounded-full" />
        <Skeleton className="h-4 w-4 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}
