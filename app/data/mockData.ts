// src/app/data/mockData.ts
export type UserProfile = {
  name: string;
  role: string;
  avatar: string;
  targetProgress: number;
  target: number;
  completed: number;
};

export type Submission = {
  id: string;
  taskName: string;
  deadline: string;
  status: string;
};

export const userProfiles: UserProfile[] = [
  {
    name: "Aditya Dey",
    role: "UI/UX Designer",
    avatar: "/avatars/aditya.png",
    targetProgress: 85,
    target: 2000,
    completed: 1700,
  },
  {
    name: "Rajina Pandey",
    role: "UI/UX Designer",
    avatar: "/avatars/rajina.png",
    targetProgress: 75,
    target: 2000,
    completed: 1500,
  },
];

export const submissions: Submission[] = [
  {
    id: "1",
    taskName: "Landing Page Revamp",
    deadline: "30th August, 2025",
    status: "In Progress",
  },
  {
    id: "2",
    taskName: "Dashboard UI Mockup",
    deadline: "25th August, 2025",
    status: "Completed",
  },
  {
    id: "3",
    taskName: "User Onboarding Flow",
    deadline: "15th September, 2025",
    status: "Pending",
  },
];