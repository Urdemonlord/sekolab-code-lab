
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";

interface ProfileOverviewProps {
  user: {
    name: string;
    email: string;
    joinDate: string;
    level: string;
    totalXP: number;
    streak: number;
  };
}

const ProfileOverview = ({ user }: ProfileOverviewProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="rounded-xl card-hover border-border bg-card">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold shadow-soft dark:shadow-soft-dark">
            {user.name
              .split(" ")
              .map(part => part.charAt(0))
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <CardTitle className="text-xl text-foreground">{user.name}</CardTitle>
          <p className="text-secondary-content">{user.email}</p>
          <p className="text-sm text-muted-content">Bergabung {user.joinDate}</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-secondary-content">Level</span>
              <span className="font-semibold text-primary">{user.level}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-content">Total XP</span>
              <span className="font-semibold text-accent">{user.totalXP.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-content">Streak</span>
              <span className="font-semibold text-warning">{user.streak} hari 🔥</span>
            </div>          </div>
          <Button className="w-full mt-6 btn-primary rounded-xl" onClick={() => setOpen(true)}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>
      <EditProfileDialog open={open} setOpen={setOpen} user={user} />
    </>
  );
};

export default ProfileOverview;
