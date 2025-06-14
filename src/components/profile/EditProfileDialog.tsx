
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EditProfileDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: {
    name: string;
    email: string;
    joinDate: string;
    level: string;
    totalXP: number;
    streak: number;
  };
}

const EditProfileDialog = ({ open, setOpen, user }: EditProfileDialogProps) => {
  const [name, setName] = useState(user.name);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update to Supabase profiles
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave} className="space-y-3">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Nama Lengkap</label>
            <Input value={name} onChange={e => setName(e.target.value)} autoFocus required />
          </div>
          {/* Akan bisa ditambah field lain, misal avatar */}
          <div className="flex gap-2 justify-end pt-2">
            <Button variant="secondary" type="button" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">Simpan</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
