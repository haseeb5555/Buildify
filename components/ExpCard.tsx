/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8BBV8PceKVw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";

interface Props {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}
export default function ExpCard({ title, company, startDate, endDate }: Props) {
  return (
    <Card className="w-full mx-auto p-3 dark:bg-dark-1 bg-white shadow-lg rounded-lg border border-dark-3">
      <CardContent className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <GlobeIcon className="h-12 w-12" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-slate-200">
            {company}
          </h3>
          <p className="text-sm text-gray-600">{title}</p>
          <div className="text-xs text-gray-500">
            <p>
              {" "}
              <span className="font-bold text-">Start Date:</span>{" "}
              {startDate?.toString().slice(0, 15)}
            </p>
            <p>
              <span className="font-bold">End Date:</span>{" "}
              {endDate?.toString().slice(0, 15)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
