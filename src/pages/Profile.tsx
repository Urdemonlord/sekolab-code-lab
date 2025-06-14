
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ProfileOverview from "@/components/profile/ProfileOverview";
import ProfileStats from "@/components/profile/ProfileStats";
import CoursesInProgress from "@/components/profile/CoursesInProgress";
import Achievements from "@/components/profile/Achievements";
import RecentActivity from "@/components/profile/RecentActivity";

// Dummy Data (seharusnya nanti ambil dari Supabase)
const user = {
  name: "Ahmad Setiawan",
  email: "ahmad.setiawan@example.com",
  joinDate: "Januari 2024",
  totalXP: 2450,
  level: "Intermediate Developer",
  streak: 15,
  coursesCompleted: 3,
  coursesInProgress: 2
};

const achievements = [
  { id: 1, title: "First Steps", description: "Menyelesaikan kursus pertama", icon: "🎯", earned: true },
  { id: 2, title: "Python Master", description: "Menguasai dasar-dasar Python", icon: "🐍", earned: true },
  { id: 3, title: "Code Streak", description: "Coding 7 hari berturut-turut", icon: "🔥", earned: true },
  { id: 4, title: "JavaScript Ninja", description: "Menyelesaikan kursus JavaScript", icon: "⚡", earned: false },
  { id: 5, title: "AI Explorer", description: "Memulai journey Machine Learning", icon: "🤖", earned: false },
  { id: 6, title: "Problem Solver", description: "Menyelesaikan 50 coding challenge", icon: "🧩", earned: false }
];

const recentActivity = [
  { date: "Hari ini", activity: "Menyelesaikan lesson: Python Functions", course: "Python untuk Pemula", xp: 50 },
  { date: "Kemarin", activity: "Mengerjakan quiz: JavaScript Basics", course: "JavaScript Modern", xp: 30 },
  { date: "2 hari lalu", activity: "Menyelesaikan project: Calculator App", course: "Python untuk Pemula", xp: 100 },
  { date: "3 hari lalu", activity: "Memulai kursus baru", course: "Machine Learning Basics", xp: 25 },
  { date: "5 hari lalu", activity: "Menyelesaikan lesson: HTML Semantics", course: "Web Development", xp: 40 }
];

const coursesInProgress = [
  {
    title: "JavaScript Modern",
    progress: 65,
    nextLesson: "Async/Await dan Promises",
    totalLessons: 24,
    completedLessons: 15
  },
  {
    title: "Machine Learning Basics", 
    progress: 20,
    nextLesson: "Introduction to Neural Networks",
    totalLessons: 18,
    completedLessons: 4
  }
];

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/auth");
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth");
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-xl text-gray-600">Selamat datang kembali, {user.name}! 👋</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Stats */}
            <div className="lg:col-span-1 space-y-6">
              <ProfileOverview user={user}/>
              <ProfileStats coursesCompleted={user.coursesCompleted} coursesInProgress={user.coursesInProgress}/>
            </div>
            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CoursesInProgress courses={coursesInProgress}/>
              <Achievements achievements={achievements}/>
              <RecentActivity recentActivity={recentActivity}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
