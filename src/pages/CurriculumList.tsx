import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play } from 'lucide-react';

const CurriculumList = () => {
  const modules = [
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
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
      progress: 0,
      topics: ['Components', 'JSX', 'State & Props', 'Hooks', 'Routing']
    },
    {
      id: 'modul-07',
      title: 'Proyek Full-Stack',
      description: 'Integrasikan semua yang telah dipelajari untuk membangun aplikasi web lengkap.',
      icon: '🏗️',
      color: 'bg-pink-50 border-pink-200',
      level: 'Lanjutan', 
      duration: '8 minggu',
      lessons: 16,
      students: 423,
      rating: 4.8,
      progress: 0,
      topics: ['Project Planning', 'Frontend & Backend', 'Database', 'Deployment', 'Testing']
    }
  ];

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kurikulum Web Development', href: '/curriculum' }
  ];

  const totalLessons = modules.reduce((sum, module) => sum + module.lessons, 0);
  const totalDuration = modules.reduce((sum, module) => {
    const weeks = parseInt(module.duration.split(' ')[0]);
    return sum + weeks;
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Kurikulum Web Development</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Jalur pembelajaran lengkap dari HTML/CSS dasar hingga React dan proyek full-stack. 
            Dirancang untuk membawa Anda dari pemula hingga menjadi web developer yang kompeten.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-2xl font-bold text-primary">{modules.length}</div>
                <div className="text-sm text-muted-foreground">Modul</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-2xl font-bold text-primary">{totalLessons}</div>
                <div className="text-sm text-muted-foreground">Pelajaran</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-2xl font-bold text-primary">{totalDuration}</div>
                <div className="text-sm text-muted-foreground">Minggu</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jalur Pembelajaran</h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
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

                      {/* Progress */}
                      {module.progress > 0 && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
                          </div>
                          <Progress value={module.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Siap Memulai Perjalanan Anda?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mulai dari HTML Dasar dan ikuti jalur pembelajaran yang telah dirancang khusus 
              untuk membawa Anda menjadi web developer yang handal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/curriculum/modul-01">
                  Mulai dari HTML Dasar
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/courses">
                  Lihat Kursus Lainnya
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default CurriculumList;
