
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const subjectList = [
  "Saran & Masukan",
  "Laporan Bug",
  "Kerja Sama",
  "Akses Kursus",
  "Lainnya",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjectList[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Harap isi semua field!",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        toast({
          title: "Terkirim!",
          description: "Pesan Anda telah kami terima.",
          variant: "default",
        });
        setName(""); setEmail(""); setSubject(subjectList[0]); setMessage("");
      } else {
        toast({ variant: "destructive", title: "Gagal mengirim pesan" });
      }
    } catch {
      toast({ variant: "destructive", title: "Terjadi kesalahan" });
    }
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <title>Hubungi Kami | Sekolab</title>
        <meta name="description" content="Kontak tim Sekolab untuk saran, kerjasama, atau bantuan teknis. Support cepat & responsif!" />
      </Helmet>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <Breadcrumbs
          items={[
            { label: "Help", href: "#" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div className="mb-10 md:mb-0">
            <p className="mb-4 text-muted-foreground">
              Tim Sekolab siap membantu Anda!  
              <br />Silakan isi form atau email ke <a href="mailto:support@sekolab.id" className="text-primary underline">support@sekolab.id</a>
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Alamat:</strong> Gedung Sekolab, Jl. Koding No. 1, Jakarta</li>
              <li><strong>Telepon:</strong> 021-1234-5678</li>
              <li><strong>Jam Operasional:</strong> Senin-Jumat, 09.00-17.00 WIB</li>
            </ul>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Nama</label>
              <Input value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subjek</label>
              <select
                className="w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-primary"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
              >
                {subjectList.map(item => <option key={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Pesan</label>
              <Textarea value={message} onChange={e => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" disabled={loading}
              className="w-full bg-[#2563EB] hover:bg-[#1841a9]">
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
