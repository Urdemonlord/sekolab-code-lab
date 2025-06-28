
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play } from 'lucide-react';

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('Semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeTab, setActiveTab] = useState('courses');

  // Data kurikulum web development
  const webDevCurriculum = [
    {
      id: 'modul-01',
      title: 'HTML Dasar',
      description: 'Pelajari struktur dasar halaman web menggunakan HTML. Mulai dari elemen dasar hingga semantic HTML.',
      icon: '📝',
      color: 'bg-orange-50 border-orange-200',
      level: 'Pemula',
      duration: '4 minggu',
      lessons: 8,
      students: 2150,
      rating: 4.9,
      topics: ['Tag HTML', 'Struktur Dokumen', 'Semantic HTML', 'Forms', 'Media Elements']
    },
    {
      id: 'modul-02', 
      title: 'CSS Dasar',
      description: 'Menghias dan mempercantik halaman web dengan CSS. Pelajari selector, properties, dan styling dasar.',
      icon: '🎨',
      color: 'bg-blue-50 border-blue-200',
      level: 'Pemula',
      duration: '6 minggu',
      lessons: 12,
      students: 1890,
      rating: 4.8,
      topics: ['CSS Selectors', 'Box Model', 'Colors & Typography', 'Positioning', 'Responsive Design']
    },
    {
      id: 'modul-03',
      title: 'JavaScript Dasar', 
      description: 'Membuat halaman web yang interaktif dengan JavaScript. Pelajari variabel, fungsi, dan event handling.',
      icon: '⚡',
      color: 'bg-yellow-50 border-yellow-200',
      level: 'Pemula',
      duration: '8 minggu',
      lessons: 16,
      students: 1650,
      rating: 4.7,
      topics: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events', 'Arrays & Objects']
    },
    {
      id: 'modul-04',
      title: 'CSS Layout Modern',
      description: 'Kuasai Flexbox dan CSS Grid untuk membuat layout website yang responsif dan modern.',
      icon: '📐',
      color: 'bg-green-50 border-green-200',
      level: 'Menengah', 
      duration: '6 minggu',
      lessons: 10,
      students: 1240,
      rating: 4.9,
      topics: ['Flexbox', 'CSS Grid', 'Responsive Layout', 'Mobile First', 'Layout Patterns']
    },
    {
      id: 'modul-05',
      title: 'JavaScript Menengah',
      description: 'Pelajari konsep asynchronous, DOM manipulation lanjutan, dan integrasi dengan API.',
      icon: '🚀',
      color: 'bg-purple-50 border-purple-200',
      level: 'Menengah',
      duration: '10 minggu',
      lessons: 20,
      students: 890,
      rating: 4.8,
      topics: ['Async/Await', 'Fetch API', 'ES6+ Features', 'Modules', 'Error Handling']
    },
    {
      id: 'modul-06',
      title: 'React Fundamentals',
      description: 'Membangun aplikasi web modern dengan React. Pelajari components, state, dan hooks.',
      icon: '⚛️',
      color: 'bg-cyan-50 border-cyan-200', 
      level: 'Lanjutan',
      duration: '12 minggu',
      lessons: 24,
      students: 567,
      rating: 4.9,
      topics: ['Components', 'JSX', 'State & Props', 'Hooks', 'Routing']
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Python untuk Pemula",
      description: "Pelajari dasar-dasar Python dari nol hingga bisa membuat program pertama. Cocok untuk yang belum pernah coding sama sekali.",
      level: "Pemula",
      category: "Programming",
      duration: "8 minggu",
      students: 1240,
      rating: 4.8,
      price: "Gratis",
      image: "🐍",
      color: "bg-green-50 border-green-200"
    },
    {
      id: 2,
      title: "JavaScript Modern",
      description: "Kuasai JavaScript ES6+ dan bangun aplikasi web interaktif yang responsif dan modern.",
      level: "Menengah",
      category: "Web Development",
      duration: "12 minggu", 
      students: 890,
      rating: 4.7,
      price: "Rp 299K",
      image: "⚡",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      description: "Pengenalan AI dan Machine Learning dengan Python. Pelajari algoritma dasar dan implementasinya.",
      level: "Menengah",
      category: "AI/ML",
      duration: "10 minggu",
      students: 567,
      rating: 4.9,
      price: "Rp 499K",
      image: "🤖",
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 4,
      title: "React Development",
      description: "Buat aplikasi web modern dengan React dan Next.js. Dari component hingga deployment.",
      level: "Lanjutan",
      category: "Web Development",
      duration: "14 minggu",
      students: 423,
      rating: 4.6,
      price: "Rp 399K",
      image: "⚛️",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 5,
      title: "Data Science dengan Python",
      description: "Analisis data, visualisasi, dan machine learning untuk memecahkan masalah bisnis.",
      level: "Menengah",
      category: "Data Science",
      duration: "16 minggu",
      students: 334,
      rating: 4.8,
      price: "Rp 599K",
      image: "📊",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      id: 6,
      title: "HTML & CSS Responsive",
      description: "Bangun website yang cantik dan responsif dengan HTML5 dan CSS3 modern.",
      level: "Pemula",
      category: "Web Development",
      duration: "6 minggu",
      students: 2100,
      rating: 4.5,
      price: "Gratis",
      image: "🎨",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const levels = ['Semua', 'Pemula', 'Menengah', 'Lanjutan'];
  const categories = ['Semua', 'Programming', 'Web Development', 'AI/ML', 'Data Science'];

  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'Semua' || course.level === selectedLevel;
    const categoryMatch = selectedCategory === 'Semua' || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kursus & Kurikulum
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih jalur pembelajaran yang sesuai dengan tujuan Anda. Kurikulum terstruktur atau kursus individu.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="curriculum" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Kurikulum Web Dev
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Kursus Lainnya
              </TabsTrigger>
            </TabsList>

            {/* Tab Kurikulum */}
            <TabsContent value="curriculum" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Kurikulum Web Development</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Jalur pembelajaran lengkap dari HTML/CSS dasar hingga React. 
                  Dirancang untuk membawa Anda dari pemula hingga menjadi web developer yang kompeten.
                </p>
              </div>

              <div className="space-y-6">
                {webDevCurriculum.map((module, index) => (
                  <Card key={module.id} className={`${module.color} border-2 transition-all hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                            {index + 1}
                          </div>
                        </div>

                        {/* Module Icon */}
                        <div className="text-4xl">{module.icon}</div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold">{module.title}</h3>
                                <Badge variant="secondary">{module.level}</Badge>
                              </div>
                              <p className="text-muted-foreground mb-3">{module.description}</p>
                              
                              {/* Topics */}
                              <div className="flex flex-wrap gap-1 mb-4">
                                {module.topics.slice(0, 3).map((topic, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                                {module.topics.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{module.topics.length - 3} lainnya
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <Button asChild>
                              <Link to={`/curriculum/${module.id}`} className="flex items-center gap-2">
                                <Play className="w-4 h-4" />
                                Mulai
                              </Link>
                            </Button>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {module.duration}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <BookOpen className="w-4 h-4" />
                              {module.lessons} pelajaran
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-4 h-4" />
                              {module.students.toLocaleString()} siswa
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {module.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Siap Memulai Perjalanan Web Development?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Mulai dari HTML Dasar dan ikuti jalur pembelajaran yang telah dirancang khusus 
                    untuk membawa Anda menjadi web developer yang handal.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/curriculum/modul-01">
                      Mulai dari HTML Dasar
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab Kursus Lainnya */}
            <TabsContent value="courses" className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filter Sidebar */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-card rounded-xl card-hover p-6 sticky top-24 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Filter Kursus</h3>
                    <div className="mb-6">
                      <h4 className="font-medium text-secondary-content mb-3">Level</h4>
                      <div className="space-y-2">
                        {levels.map(level => (
                          <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              selectedLevel === level 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-muted-foreground hover:bg-accent/10 hover:text-accent'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-content mb-3">Kategori</h4>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              selectedCategory === category 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-muted-foreground hover:bg-accent/10 hover:text-accent'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Grid */}
                <div className="flex-1">
                  <div className="mb-6 flex justify-between items-center">
                    <p className="text-muted-foreground">
                      Menampilkan {filteredCourses.length} kursus
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Card 
                        key={course.id} 
                        className={`card-hover rounded-xl shadow-soft ${course.color} border-2 h-full flex flex-col`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="text-4xl">{course.image}</div>
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">{course.level}</div>
                              <div className="font-bold text-lg text-primary">{course.price}</div>
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                          <CardDescription className="text-muted-foreground line-clamp-3">
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pt-0 flex-1 flex flex-col justify-between">
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex justify-between">
                              <span>Durasi:</span>
                              <span className="font-medium">{course.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Siswa:</span>
                              <span className="font-medium">{course.students.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Rating:</span>
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{course.rating}</span>
                                <span className="text-amber-500">⭐</span>
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90 rounded-xl"
                            size="sm"
                          >
                            Lihat Detail
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
