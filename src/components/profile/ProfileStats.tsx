
import { Card } from "@/components/ui/card";

interface ProfileStatsProps {
  coursesCompleted: number;
  coursesInProgress: number;
}

const ProfileStats = ({ coursesCompleted, coursesInProgress }: ProfileStatsProps) => (
  <div className="grid grid-cols-2 gap-4">
    <Card className="rounded-xl shadow-soft text-center p-4">
      <div className="text-2xl font-bold text-primary mb-1">{coursesCompleted}</div>
      <div className="text-sm text-gray-600">Kursus Selesai</div>
    </Card>
    <Card className="rounded-xl shadow-soft text-center p-4">
      <div className="text-2xl font-bold text-accent mb-1">{coursesInProgress}</div>
      <div className="text-sm text-gray-600">Sedang Belajar</div>
    </Card>
  </div>
);

export default ProfileStats;
