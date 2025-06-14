
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
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
              {/* Profile Card */}
              <Card className="rounded-xl shadow-soft">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                    AS
                  </div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">Bergabung {user.joinDate}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Level</span>
                      <span className="font-semibold text-primary">{user.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total XP</span>
                      <span className="font-semibold text-accent">{user.totalXP.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Streak</span>
                      <span className="font-semibold text-orange-500">{user.streak} hari 🔥</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 rounded-xl">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="rounded-xl shadow-soft text-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{user.coursesCompleted}</div>
                  <div className="text-sm text-gray-600">Kursus Selesai</div>
                </Card>
                <Card className="rounded-xl shadow-soft text-center p-4">
                  <div className="text-2xl font-bold text-accent mb-1">{user.coursesInProgress}</div>
                  <div className="text-sm text-gray-600">Sedang Belajar</div>
                </Card>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Courses in Progress */}
              <Card className="rounded-xl shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">Kursus yang Sedang Dipelajari</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coursesInProgress.map((course, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-600">
                              Selanjutnya: {course.nextLesson}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-lg">
                            Lanjutkan
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="rounded-xl shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className={`border rounded-lg p-4 text-center transition-all ${
                          achievement.earned 
                            ? 'bg-green-50 border-green-200 text-green-800' 
                            : 'bg-gray-50 border-gray-200 text-gray-500'
                        }`}
                      >
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm">{achievement.description}</p>
                        {achievement.earned && (
                          <div className="mt-2 text-xs font-medium text-green-600">
                            ✓ Tercapai
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="rounded-xl shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">Aktivitas Terbaru</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-900">{activity.activity}</p>
                              <p className="text-sm text-gray-600">{activity.course}</p>
                              <p className="text-xs text-gray-500">{activity.date}</p>
                            </div>
                            <span className="text-sm font-medium text-accent">+{activity.xp} XP</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
