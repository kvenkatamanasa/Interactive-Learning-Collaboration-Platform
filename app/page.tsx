"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  Play, 
  Calendar, 
  Clock, 
  Heart, 
  Star, 
  Upload, 
  Download, 
  Trash, 
  Edit, 
  Plus, 
  Check, 
  X, 
  ArrowRight,
  Search,
  Bell,
  User,
  Settings,
  Mail
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data types
type UserRole = "learner" | "mentor";
type ContentType = "article" | "tutorial" | "video";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  joinDate: string;
  progress: number;
}

interface Content {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  author: string;
  date: string;
  duration?: string;
  likes: number;
  shares: number;
}

interface AnalyticsData {
  date: string;
  progress: number;
  contributions: number;
}

// Mock data
const mockUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  role: "learner",
  avatar: "https://github.com/shadcn.png",
  joinDate: "2023-01-15",
  progress: 75
};

const mockContent: Content[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    type: "tutorial",
    description: "Learn how to use React Hooks to simplify your components",
    author: "Sarah Miller",
    date: "2023-10-15",
    duration: "15 min",
    likes: 42,
    shares: 12
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    type: "article",
    description: "Explore advanced patterns for type-safe TypeScript development",
    author: "Michael Chen",
    date: "2023-10-10",
    likes: 87,
    shares: 24
  },
  {
    id: "3",
    title: "Building Responsive Layouts",
    type: "video",
    description: "Master CSS Grid and Flexbox for modern responsive designs",
    author: "Emma Wilson",
    date: "2023-10-05",
    duration: "22 min",
    likes: 124,
    shares: 38
  }
];

const mockAnalytics: AnalyticsData[] = [
  { date: "Oct 1", progress: 30, contributions: 2 },
  { date: "Oct 5", progress: 45, contributions: 3 },
  { date: "Oct 10", progress: 60, contributions: 5 },
  { date: "Oct 15", progress: 75, contributions: 7 },
  { date: "Oct 20", progress: 85, contributions: 9 },
];

export default function LearningDashboard() {
  const [user, setUser] = useState<User>(mockUser);
  const [content, setContent] = useState<Content[]>(mockContent);
  const [activeTab, setActiveTab] = useState<"dashboard" | "content" | "profile">("dashboard");
  const [newContent, setNewContent] = useState({
    title: "",
    type: "article" as ContentType,
    description: ""
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateContent = () => {
    if (!newContent.title || !newContent.description) return;
    
    const contentItem: Content = {
      id: (content.length + 1).toString(),
      title: newContent.title,
      type: newContent.type,
      description: newContent.description,
      author: user.name,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      shares: 0,
      ...(newContent.type === "video" && { duration: "10 min" })
    };
    
    setContent([contentItem, ...content]);
    setNewContent({ title: "", type: "article", description: "" });
    setIsCreating(false);
  };

  const handleDeleteContent = (id: string) => {
    setContent(content.filter(item => item.id !== id));
  };

  const toggleUserRole = () => {
    setUser({
      ...user,
      role: user.role === "learner" ? "mentor" : "learner"
    });
  };

  const getTypeIcon = (type: ContentType) => {
    switch (type) {
      case "article": return <Edit className="h-4 w-4" />;
      case "tutorial": return <Play className="h-4 w-4" />;
      case "video": return <Play className="h-4 w-4" />;
      default: return <Edit className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: ContentType) => {
    switch (type) {
      case "article": return "bg-blue-100 text-blue-800";
      case "tutorial": return "bg-green-100 text-green-800";
      case "video": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your full dashboard code goes here... */}
      {/* Keep everything from your original page.tsx exactly as you wrote */}
    </div>
  );
}

