// src/app/components/MyUploadsTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, SlidersHorizontal, FileText, Image, Film, File } from "lucide-react"; // Import new icons

// Define a type for your upload data for better type safety
interface UploadItem {
  name: string;
  type: 'Legal' | 'Vendors & Assets' | 'Technology' | 'Financial' | 'Docs' | 'Video' | 'Other';
  size: string;
  aiAppIncluded: boolean;
  dashboardIncluded: boolean;
  stageAccess: 'Full' | 'Onboarding' | 'Prospect' | 'Franchise';
}

export function MyUploadsTable() {
  const uploads: UploadItem[] = [
    { name: "Tech requirements.pdf", type: "Technology", size: "200 KB", aiAppIncluded: true, dashboardIncluded: false, stageAccess: "Full" },
    { name: "Dashboard screenshot.jpg", type: "Vendors & Assets", size: "720 KB", aiAppIncluded: true, dashboardIncluded: true, stageAccess: "Onboarding" },
    { name: "Dashboard prototype recording.mp4", type: "Video", size: "15 MB", aiAppIncluded: false, dashboardIncluded: true, stageAccess: "Franchise" },
    { name: "Financial Overview.pdf", type: "Financial", size: "4.2 MB", aiAppIncluded: true, dashboardIncluded: false, stageAccess: "Prospect" },
    { name: "UX Design Guidelines.docx", type: "Legal", size: "400 KB", aiAppIncluded: false, dashboardIncluded: true, stageAccess: "Onboarding" },
    { name: "Dashboard Interaction.aep", type: "Other", size: "12 MB", aiAppIncluded: true, dashboardIncluded: false, stageAccess: "Onboarding" },
    { name: "Briefing call recording.mp3", type: "Financial", size: "18.6 MB", aiAppIncluded: false, dashboardIncluded: false, stageAccess: "Prospect" },
  ];

  // Helper function to get the correct icon based on file name/type
  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.pdf') || fileName.endsWith('.docx')) return <FileText className="h-4 w-4 text-red-500" />;
    if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) return <Image className="h-4 w-4 text-blue-500" />;
    if (fileName.endsWith('.mp4') || fileName.endsWith('.mov')) return <Film className="h-4 w-4 text-purple-500" />;
    return <File className="h-4 w-4 text-gray-400" />;
  };

  // Helper function to get badge variant for different types
  const getBadgeVariant = (type: UploadItem['type']) => {
    switch (type) {
      case 'Legal': return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Vendors & Assets': return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'Technology': return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Financial': return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'Docs': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'Video': return 'bg-pink-100 text-pink-800 hover:bg-pink-100';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4"> {/* Wrapped in a Card-like div */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Uploads</h2>
        <div className="flex items-center gap-2 text-gray-500">
          Documents that are uploaded by you.
          <span className="text-xl font-bold ml-2">...</span> {/* Three dots icon */}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input placeholder="Search here..." className="w-full pl-8 rounded-md" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:bg-gray-50">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30%]">Document Name</TableHead>
            <TableHead className="w-[15%]">Document Type</TableHead>
            <TableHead className="w-[15%]">AI App Inclusion</TableHead>
            <TableHead className="w-[15%]">Dashboard Inclusion</TableHead>
            <TableHead className="w-[15%]">Stage Access</TableHead>
            <TableHead className="w-[10%] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {uploads.map((upload) => (
            <TableRow key={upload.name}>
              <TableCell className="font-medium flex items-center gap-2">
                {getFileIcon(upload.name)}
                <span>{upload.name}</span>
                <span className="text-xs text-gray-500 ml-2">{upload.size}</span>
              </TableCell>
              <TableCell>
                <Badge className={getBadgeVariant(upload.type)}>{upload.type}</Badge>
              </TableCell>
              <TableCell>
                <Switch checked={upload.aiAppIncluded} />
              </TableCell>
              <TableCell>
                <Switch checked={upload.dashboardIncluded} />
              </TableCell>
              <TableCell>
                <Select defaultValue={upload.stageAccess}>
                  <SelectTrigger className="w-[120px] h-8 text-xs">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full">Full</SelectItem>
                    <SelectItem value="Onboarding">Onboarding</SelectItem>
                    <SelectItem value="Prospect">Prospect</SelectItem>
                    <SelectItem value="Franchise">Franchise</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2 text-blue-500 text-sm">
                  <span className="cursor-pointer hover:underline">Delete</span>
                  <span className="cursor-pointer hover:underline">Edit</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
