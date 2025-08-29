// src/app/components/ProspectLeadsSection.tsx
import { Card, CardHeader, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function ProspectLeadsSection() {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-sm">
      <CardHeader className="pb-2 px-0 pt-0">
        <h3 className="font-semibold text-lg text-gray-800">Prospect Leads</h3>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-blue-100 text-blue-800 font-medium">
              <AvatarFallback>WW</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-800">Wade Warren</div>
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium rounded-md">Stage: Initial Inquiry</Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-purple-100 text-purple-800 font-medium">
              <AvatarFallback>AV</AvatarFallback> {/* Assuming Ava Wright from image */}
            </Avatar>
            <div>
              <div className="font-medium text-gray-800">Ava Wright</div> {/* Assuming Ava Wright from image */}
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium rounded-md">Stage: Initial Inquiry</Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-red-100 text-red-800 font-medium">
              <AvatarFallback>CF</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-800">Cody Fisher</div>
              <p className="text-sm text-gray-500">Stage: Initial Inquiry</p>
            </div>
          </div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium rounded-md">Stage: Initial Inquiry</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
