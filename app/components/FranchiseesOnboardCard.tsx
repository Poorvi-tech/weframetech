// src/app/components/FranchiseesOnboardCard.tsx
import { Card, CardHeader, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { TrendingUp } from "lucide-react"; // Import TrendingUp icon

export function FranchiseesOnboardCard() {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-sm">
      <CardHeader className="py-0 px-0 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">Total Franchisees Onboard</h3>
          <div className="flex items-center text-green-500 font-medium text-sm">
            <TrendingUp className="h-4 w-4 mr-1" /> 7.4%
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl font-bold text-gray-800">14</div>
          <div className="flex -space-x-2 overflow-hidden">
            {/* Avatars with specific colors matching the design */}
            <Avatar className="w-8 h-8 ring-2 ring-white bg-[#0000FF] text-white text-xs flex items-center justify-center"> {/* Blue Avatar */}
              <AvatarFallback>P</AvatarFallback> {/* Placeholder initial */}
            </Avatar>
            <Avatar className="w-8 h-8 ring-2 ring-white bg-[#FF0000] text-white text-xs flex items-center justify-center"> {/* Red Avatar */}
              <AvatarFallback>A</AvatarFallback> {/* Placeholder initial */}
            </Avatar>
            <Avatar className="w-8 h-8 ring-2 ring-white bg-[#00FF00] text-white text-xs flex items-center justify-center"> {/* Green Avatar */}
              <AvatarFallback>S</AvatarFallback> {/* Placeholder initial */}
            </Avatar>
            {/* Add more avatars if needed, adjusting colors as per design */}
          </div>
        </div>
        <div className="space-y-3">
          {/* Stage 1 */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span> {/* Red dot */}
              <span>Stage 1 (Initial Inquiry)</span>
            </div>
            <span>02</span>
          </div>
          <Progress value={20} className="h-2 bg-gray-200 [&::-webkit-progress-value]:bg-red-500" /> {/* Red progress bar */}

          {/* Stage 2 */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span> {/* Yellow dot */}
              <span>Stage 2 (Document Submission)</span>
            </div>
            <span>07</span>
          </div>
          <Progress value={70} className="h-2 bg-gray-200 [&::-webkit-progress-value]:bg-yellow-500" /> {/* Yellow progress bar */}

          {/* Stage 3 */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span> {/* Green dot */}
              <span>Stage 3 (Training)</span>
            </div>
            <span>05</span>
          </div>
          <Progress value={50} className="h-2 bg-gray-200 [&::-webkit-progress-value]:bg-green-500" /> {/* Green progress bar */}
        </div>
      </CardContent>
    </Card>
  );
}
