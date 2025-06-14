
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
}

const Achievements = ({ achievements }: { achievements: Achievement[] }) => (
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
);

export default Achievements;
