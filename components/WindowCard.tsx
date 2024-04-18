
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
interface Props {
  id: string;
  title: string;
  description: string;
  budget: string;
  TotalAmount: string;
  milestones: {
    title: string;
    description: string;
    amount: string;
    due: string;
  }[];
}
export default function WindowCard({title, description, budget, TotalAmount, milestones}:Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 py-4">
          <div className="font-semibold">Budget</div>
          <div className="ml-auto font-semibold">{budget}</div>
        </div>
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 py-4">
          <div className="font-semibold">Total Amount</div>
          <div className="ml-auto font-semibold">{TotalAmount}</div>
        </div>
        {
          milestones.map((milestone, index) => (
            <div key={index} className="divide-y divide-gray-200 dark:divide-gray-800">
              <div className="flex items-center py-4">
                <div>
                  <div className="font-semibold">{milestone.title}</div>
                  <div className="text-sm opacity-70">{milestone.description}</div>
                </div>
                <div className="ml-auto font-semibold">{milestone.amount}</div>
                <div className="text-sm ml-4 opacity-70">{milestone.due}</div>
              </div>
            </div>
          ))
        }
       
      </CardContent>
    </Card>
  )
}