
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CoursesPreview = () => {
  const courses = [
    {
      id: 1,
      title: "Python untuk Pemula",
      description: "Pelajari dasar-dasar Python dari nol hingga bisa membuat program pertama",
      level: "Pemula",
      duration: "8 minggu",
      students: 1240,
      image: "🐍",
      color: "bg-green-50 border-green-200"
    },
    {
      id: 2,
      title: "JavaScript Modern",
      description: "Kuasai JavaScript ES6+ dan bangun aplikasi web interaktif",
      level: "Menengah",
      duration: "12 minggu", 
      students: 890,
      image: "⚡",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      description: "Pengenalan AI dan Machine Learning dengan Python",
      level: "Menengah",
      duration: "10 minggu",
      students: 567,
      image: "🤖",
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 4,
      title: "React Development",
      description: "Buat aplikasi web modern dengan React dan Next.js",
      level: "Lanjutan",
      duration: "14 minggu",
      students: 423,
      image: "⚛️",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kursus Populer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <div className="text-4xl mb-3">{course.image}</div>
                <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-500 mb-4">
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
                >
                  Mulai Belajar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Lihat Semua Kursus →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
