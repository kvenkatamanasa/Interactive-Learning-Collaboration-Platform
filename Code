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
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">LearnHub</span>
              </div>
              <nav className="ml-6 flex space-x-4">
                <Button 
                  variant={activeTab === "dashboard" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("dashboard")}
                  className="flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === "content" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("content")}
                  className="flex items-center"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Content
                </Button>
                <Button 
                  variant={activeTab === "profile" ? "default" : "ghost"} 
                  onClick={() => setActiveTab("profile")}
                  className="flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </nav>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </Button>
              <div className="ml-3 flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard View */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Welcome back, {user.name}!</p>
              </div>
              <div className="mt-4 flex md:mt-0">
                <Button onClick={toggleUserRole} variant="outline">
                  Switch to {user.role === "learner" ? "Mentor" : "Learner"}
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
                  <Check className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.progress}%</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Content Created</CardTitle>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Community Points</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+180 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Connections</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">84</div>
                  <p className="text-xs text-muted-foreground">+5 new this week</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockAnalytics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="contributions" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Play className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Completed "React Hooks Tutorial"</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Heart className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Liked "Advanced TypeScript Patterns"</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Upload className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Shared "Responsive Layouts Video"</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Earned "Quick Learner" badge</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Content View */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Learning Content</h1>
                <p className="mt-1 text-sm text-gray-500">Browse and manage educational resources</p>
              </div>
              <div className="mt-4 flex md:mt-0">
                <Button onClick={() => setIsCreating(!isCreating)}>
                  <Plus className="h-4 w-4 mr-2" />
                  {isCreating ? "Cancel" : "Create Content"}
                </Button>
              </div>
            </div>

            {/* Create Content Form */}
            {isCreating && (
              <Card>
                <CardHeader>
                  <CardTitle>Create New Content</CardTitle>
                  <CardDescription>Share your knowledge with the community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      placeholder="Enter content title" 
                      value={newContent.title}
                      onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Content Type</Label>
                    <Select 
                      value={newContent.type} 
                      onValueChange={(value) => setNewContent({...newContent, type: value as ContentType})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="tutorial">Tutorial</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your content" 
                      rows={4}
                      value={newContent.description}
                      onChange={(e) => setNewContent({...newContent, description: e.target.value})}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreating(false)}>Cancel</Button>
                    <Button onClick={handleCreateContent}>Create Content</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Content List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Badge className={getTypeColor(item.type)}>
                      <div className="flex items-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </div>
                    </Badge>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDeleteContent(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>By {item.author}</span>
                      <span className="mx-2">•</span>
                      <span>{item.date}</span>
                      {item.duration && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.duration}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Upload className="h-4 w-4 mr-1" />
                        <span>{item.shares}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile View */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
              <p className="mt-1 text-sm text-gray-500">Manage your account and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="mt-4">Change Avatar</Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={user.name} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" value={user.email} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" value={user.role} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="join-date">Member Since</Label>
                    <Input id="join-date" value={new Date(user.joinDate).toLocaleDateString()} readOnly />
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates about your learning progress</p>
                        </div>
                        <Button variant="outline">Enabled</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-gray-500">Get weekly learning tips and resources</p>
                        </div>
                        <Button variant="outline">Enabled</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-sm text-gray-500">Switch to dark theme</p>
                        </div>
                        <Button variant="outline">Disabled</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Security</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                        </div>
                        <Button variant="outline">Change Password</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-500">Add extra security to your account</p>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
