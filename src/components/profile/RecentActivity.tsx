
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Activity {
  date: string;
  activity: string;
  course: string;
  xp: number;
}

const RecentActivity = ({ recentActivity }: { recentActivity: Activity[] }) => (
  <Card className="rounded-xl shadow-soft">
    <CardHeader>
      <CardTitle className="text-xl">Aktivitas Terbaru</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>                  <p className="font-medium text-foreground">{activity.activity}</p>
                  <p className="text-sm text-muted-foreground">{activity.course}</p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
                <span className="text-sm font-medium text-accent">+{activity.xp} XP</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RecentActivity;
