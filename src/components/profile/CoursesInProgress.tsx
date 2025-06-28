
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  progress: number;
  nextLesson: string;
  totalLessons: number;
  completedLessons: number;
}

const CoursesInProgress = ({ courses }: { courses: Course[] }) => (
  <Card className="rounded-xl shadow-soft">
    <CardHeader>
      <CardTitle className="text-xl">Kursus yang Sedang Dipelajari</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Selanjutnya: {course.nextLesson}
                </p>
              </div>
              <span className="text-sm font-medium text-primary">
                {course.progress}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
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
);

export default CoursesInProgress;
