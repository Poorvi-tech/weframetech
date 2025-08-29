// src/app/components/Sidebar.tsx
import Link from "next/link";
// Ensure no lucide-react or any other icon imports are here if you don't want symbols.
// If you want the LogOut icon back, you would re-import it and place it next to "Logout" text.

export function Sidebar() {
  return (
    // Changed background to a very dark gray/black to match the image
    <aside className="w-64 min-h-screen bg-gray-900 p-4 border-r border-gray-800 flex flex-col justify-between text-white">
      <div>
        {/* Dashboard Title - adjust styling if needed to match image */}
        <div className="flex items-center gap-2 mb-8 text-xl font-bold">
          Dashboard
        </div>
        {/* Navigation Links */}
        <nav className="space-y-2">
          {/* Active Link - slightly lighter dark background */}
          <Link href="#" className="flex items-center px-3 py-2 rounded-md bg-gray-700 font-medium">
            Home
          </Link>
          {/* Other Links - match the hover state from the image */}
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Stages & Checklist
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Upload Docs
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Preferred Vendors
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Tech Stack
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Targets
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Zee Sales Targets
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            MAI Settings
          </Link>
          <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
            Pending Questions
          </Link>
        </nav>
      </div>

      {/* Logout Link at the bottom */}
      <div className="mt-auto space-y-2">
        <Link href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700">
          {/* Confirmed no icon tag here */}
          Logout
        </Link>
      </div>
    </aside>
  );
}
