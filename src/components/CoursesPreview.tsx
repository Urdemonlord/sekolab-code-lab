
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CoursesPreview = () => {
  const courses = [
    {
      id: 1,
      title: "HTML Dasar",
      description: "Mulai perjalanan web development dengan mempelajari struktur dasar halaman web",
      level: "Pemula",
      duration: "4 minggu",
      students: 2150,
      image: "📝",
      color: "bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800"
    },
    {
      id: 2,
      title: "CSS Dasar",
      description: "Pelajari cara menghias dan mempercantik halaman web dengan CSS",
      level: "Pemula",
      duration: "6 minggu",
      students: 1890,
      image: "🎨",
      color: "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800"
    },
    {
      id: 3,
      title: "JavaScript Dasar",
      description: "Belajar membuat halaman web yang interaktif dengan JavaScript",
      level: "Pemula",
      duration: "8 minggu", 
      students: 1650,
      image: "⚡",
      color: "bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800"
    },
    {
      id: 4,
      title: "CSS Layout Modern",
      description: "Kuasai Flexbox dan Grid untuk membuat layout website yang responsif",
      level: "Menengah",
      duration: "6 minggu",
      students: 1240,
      image: "📐",
      color: "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800"
    },
    {
      id: 5,
      title: "JavaScript Menengah",
      description: "Pelajari konsep asynchronous, DOM manipulation, dan Fetch API",
      level: "Menengah",
      duration: "10 minggu",
      students: 890,
      image: "🚀",
      color: "bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800"
    },
    {
      id: 6,
      title: "React Fundamentals",
      description: "Bangun aplikasi web modern dengan React library",
      level: "Lanjutan",
      duration: "12 minggu",
      students: 567,
      image: "⚛️",
      color: "bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800"
    }
  ];

  return (    <section className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kursus Populer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih kursus yang sesuai dengan level dan minat Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`card-hover rounded-xl shadow-soft ${course.color} border-2`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{course.image}</div>                <CardTitle className="text-lg font-bold text-foreground">{course.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Durasi:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Siswa:</span>
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 rounded-xl"
                  size="sm"
                  asChild
                >
                  <Link to={`/curriculum/modul-${course.id.toString().padStart(2, '0')}`}>
                    Mulai Belajar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-xl border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <Link to="/courses">
              Lihat Semua Kursus →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
