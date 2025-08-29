// src/app/components/KeyInsightsCard.tsx
import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, TrendingUp } from "lucide-react";

export function KeyInsightsCard() {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-sm border border-green-500"> {/* Added green border */}
      <CardHeader className="py-0 px-0 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">Key Insights & Feedback</h3>
          {/* <Sparkles className="h-4 w-4 text-gray-500" /> - Removed sparkles icon as not in final image */}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="space-y-1">
          <div className="text-3xl font-bold flex items-center gap-2 text-gray-800"> {/* Increased font size */}
            10%
            <TrendingUp className="h-5 w-5 text-green-500" /> {/* Increased icon size */}
          </div>
          <p className="text-sm text-gray-500">Sales Growth</p>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 font-medium rounded-md">Top Performer</Badge> {/* Styled badge */}
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-base text-gray-800">Feedback</h4>
          <p className="text-sm text-gray-600">
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
