// src/app/components/Header.tsx
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold">Weframetech</div>
        <Input
          type="search"
          placeholder="Search..."
          className="w-[300px] rounded-lg"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <div className="text-right">
          <div className="font-medium">Vipul Uthaiah</div>
          <div className="text-sm text-gray-500">CSO, Weframe Tech</div>
        </div>
        <Avatar>
          <AvatarImage src="/avatars/vipul.png" alt="Vipul Uthaiah" />
          <AvatarFallback>VU</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}