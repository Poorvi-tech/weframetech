// src/app/components/FinancialWellbeingCard.tsx
import { Card, CardHeader, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { TrendingUp } from "lucide-react";

export function FinancialWellbeingCard() {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-sm">
      <CardHeader className="pb-2 px-0 pt-0">
        <h3 className="font-semibold text-lg text-gray-800">Financial Wellbeing</h3>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-800">20</span>
            <span className="text-sm text-gray-500">Total Franchisees</span>
          </div>
          <div className="flex items-center text-green-500 text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-1" /> 2.1%
          </div>
        </div>

        <Progress value={70} className="h-2 bg-gray-200 [&::-webkit-progress-value]:bg-green-500" />

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <p className="text-sm text-gray-600">Target</p>
            <p className="font-bold text-lg text-gray-800">$500,000</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <p className="text-sm text-gray-600">Current</p>
            <p className="font-bold text-lg text-gray-800">$450,000</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
