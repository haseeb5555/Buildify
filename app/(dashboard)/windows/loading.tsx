/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HojW81YjYA2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-2">
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-2">
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-2">
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="space-y-2">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}