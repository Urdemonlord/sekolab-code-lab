import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import MarkdownRenderer from './MarkdownRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Play, FileText, Code2, BookOpen } from 'lucide-react';
import { getModuleContent } from '@/lib/curriculum-data';

const CurriculumViewer = () => {
  const { moduleId } = useParams();
  const [content, setContent] = useState<{
    title: string;
    lesson: string;
    examples: Array<{title: string; description: string; code: string}>;
    exercises: Array<{title: string; description: string; difficulty: string}>;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('lesson');

  // Data modul kurikulum
  const modules = [
    {
      id: 'modul-01',
      title: 'HTML Dasar',
      description: 'Fondasi dari semua halaman web',
      icon: '📝',
      color: 'bg-orange-50 border-orange-200',
      level: 'Pemula',
      duration: '4 minggu'
    },
    {
      id: 'modul-02', 
      title: 'CSS Dasar',
      description: 'Menghias dan mempercantik halaman web',
      icon: '🎨',
      color: 'bg-blue-50 border-blue-200',
      level: 'Pemula',
      duration: '6 minggu'
    },
    {
      id: 'modul-03',
      title: 'JavaScript Dasar', 
      description: 'Membuat halaman web yang interaktif',
      icon: '⚡',
      color: 'bg-yellow-50 border-yellow-200',
      level: 'Pemula',
      duration: '8 minggu'
    },
    {
      id: 'modul-04',
      title: 'CSS Layout Modern',
      description: 'Flexbox dan Grid untuk layout responsif',
      icon: '📐',
      color: 'bg-green-50 border-green-200',
      level: 'Menengah', 
      duration: '6 minggu'
    },
    {
      id: 'modul-05',
      title: 'JavaScript Menengah',
      description: 'Asynchronous, DOM, dan Fetch API',
      icon: '🚀',
      color: 'bg-purple-50 border-purple-200',
      level: 'Menengah',
      duration: '10 minggu'
    },
    {
      id: 'modul-06',
      title: 'React Fundamentals',
      description: 'Membangun aplikasi web modern dengan React',
      icon: '⚛️',
      color: 'bg-cyan-50 border-cyan-200', 
      level: 'Lanjutan',
      duration: '12 minggu'
    },
    {
      id: 'modul-07',
      title: 'Proyek Full-Stack',
      description: 'Integrasikan semua yang telah dipelajari',
      icon: '🏗️',
      color: 'bg-pink-50 border-pink-200',
      level: 'Lanjutan', 
      duration: '8 minggu'
    }
  ];

  const currentModule = modules.find(m => m.id === moduleId);
  const currentIndex = modules.findIndex(m => m.id === moduleId);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  useEffect(() => {
    setLoading(true);
    
    try {
      const moduleContent = getModuleContent(moduleId || '');
      setContent(moduleContent);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  }, [moduleId]);

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20">
          <Card>
            <CardContent className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4">Modul Tidak Ditemukan</h1>
              <p className="text-muted-foreground mb-6">
                Maaf, modul yang Anda cari tidak tersedia.
              </p>
              <Button asChild>
                <Link to="/courses">Kembali ke Kursus</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kursus', href: '/courses' },
    { label: currentModule.title, href: `/curriculum/${moduleId}` }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header Modul */}
        <Card className={`${currentModule.color} border-2 mb-8`}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="text-4xl">{currentModule.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-2xl">{currentModule.title}</CardTitle>
                  <Badge variant="secondary">{currentModule.level}</Badge>
                </div>
                <CardDescription className="text-lg">
                  {currentModule.description}
                </CardDescription>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {currentModule.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    Level {currentModule.level}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Konten Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lesson" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Materi
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Contoh
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Latihan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lesson">
            <Card>
              <CardContent className="prose max-w-none p-8">
                {content ? (
                  <div>
                    <div 
                      className="curriculum-content"
                      dangerouslySetInnerHTML={{ 
                        __html: content.lesson
                          .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>')
                          .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                          .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
                          .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$2</code></pre>')
                          .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                          .replace(/^\* (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
                          .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
                          .replace(/\n\n/g, '<br><br>')
                          .replace(/\n/g, '<br>')
                      }} 
                    />
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p>Konten tidak ditemukan untuk modul ini.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Contoh Kode</h3>
                <p className="text-muted-foreground mb-6">
                  Berikut adalah contoh-contoh implementasi untuk {currentModule.title}:
                </p>
                
                <div className="grid gap-4">
                  {content?.examples?.map((example, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{example.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {example.description}
                        </p>
                        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mb-3 border">
                          <code>{example.code}</code>
                        </pre>
                        <Button variant="outline" size="sm">
                          Lihat Live Demo
                        </Button>
                      </CardContent>
                    </Card>
                  )) || (
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Contoh akan segera tersedia</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Contoh kode untuk modul ini sedang dalam pengembangan
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exercises">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Latihan Praktik</h3>
                <p className="text-muted-foreground mb-6">
                  Uji kemampuan Anda dengan latihan-latihan berikut:
                </p>
                
                <div className="grid gap-4">
                  {content?.exercises?.map((exercise, index) => (
                    <Card key={index} className={`border-l-4 ${
                      exercise.difficulty === 'Mudah' ? 'border-l-green-500' :
                      exercise.difficulty === 'Sedang' ? 'border-l-orange-500' : 'border-l-red-500'
                    }`}>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{exercise.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exercise.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant={
                            exercise.difficulty === 'Mudah' ? 'default' :
                            exercise.difficulty === 'Sedang' ? 'secondary' : 'destructive'
                          }>
                            {exercise.difficulty}
                          </Badge>
                        </div>
                        <Button size="sm">
                          Mulai Latihan
                        </Button>
                      </CardContent>
                    </Card>
                  )) || (
                    <Card className="border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Latihan akan segera tersedia</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Latihan untuk modul ini sedang dalam pengembangan
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigasi Modul */}
        <div className="flex justify-between items-center mt-12">
          {prevModule ? (
            <Button variant="outline" asChild>
              <Link to={`/curriculum/${prevModule.id}`} className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                {prevModule.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}
          
          {nextModule ? (
            <Button asChild>
              <Link to={`/curriculum/${nextModule.id}`} className="flex items-center gap-2">
                {nextModule.title}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/courses" className="flex items-center gap-2">
                Selesai
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CurriculumViewer;
