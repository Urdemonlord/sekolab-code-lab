
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('Semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Katalog Kursus
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih kursus yang sesuai dengan level dan minat Anda. Semua materi dalam bahasa Indonesia.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Filter Kursus</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedLevel === level 
                            ? 'bg-primary text-white' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category 
                            ? 'bg-primary text-white' 
                            : 'text-gray-600 hover:bg-gray-100'
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
                <p className="text-gray-600">
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
                          <div className="text-sm text-gray-500">{course.level}</div>
                          <div className="font-bold text-lg text-primary">{course.price}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex-1 flex flex-col justify-between">
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
