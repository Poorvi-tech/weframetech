// src/app/components/AccountProgressCard.tsx
import { Card, CardHeader, CardContent } from "./ui/card";
import { Check, Dot } from "lucide-react"; // Importing Dot for unchecked state

export function AccountProgressCard() {
  return (
    <Card className="p-6 h-full flex flex-col bg-white rounded-lg shadow-sm">
      <CardHeader className="py-0 px-0 pb-4">
        <h3 className="font-semibold text-lg text-gray-800">Account Progress</h3>
      </CardHeader>
      <CardContent className="space-y-6 flex-1 flex flex-col justify-around">
        {/* Circular Progress Bar */}
        <div className="relative h-28 w-28 mx-auto">
          <svg className="h-full w-full" viewBox="0 0 36 36">
            {/* Background circle path - light gray */}
            <path className="text-gray-200" d="M18 2.0845a15.9155 15.9155 0 010 31.831" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Progress circle path - blue, strokeDasharray matches 85% */}
            <path className="text-blue-500" strokeDasharray="85, 100" d="M18 2.0845a15.9155 15.9155 0 010 31.831" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-gray-800">85%</div>
        </div>

        {/* Steps Completed */}
        <div className="space-y-2">
          <h4 className="font-medium text-base text-gray-800">Steps Completed</h4>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> {/* Green Check */}
            <span className="text-sm text-gray-700">Profile Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> {/* Green Check */}
            <span className="text-sm text-gray-700">Initial Training</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> {/* Green Check */}
            <span className="text-sm text-gray-700">Legal Documents</span>
          </div>
        </div>

        {/* Steps Remaining */}
        <div className="space-y-2">
          <h4 className="font-medium text-base text-gray-800">Steps Remaining</h4>
          <div className="flex items-center gap-2">
            <Dot className="h-4 w-4 text-gray-400" /> {/* Gray Dot for unchecked */}
            <span className="text-sm text-gray-700">Financial Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <Dot className="h-4 w-4 text-gray-400" /> {/* Gray Dot for unchecked */}
            <span className="text-sm text-gray-700">Final Review</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
