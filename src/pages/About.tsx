
import SekolabLogo from "../components/SekolabLogo";

const About = () => {
  return (
    <div className="pt-20 pb-14 min-h-screen bg-background text-foreground transition-colors">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="flex flex-col items-center">
          <SekolabLogo size="lg" />
          <h1 className="text-4xl font-bold mt-4 mb-2 gradient-text">Tentang Sekolab</h1>
        </div>
        <div className="bg-white dark:bg-[#23304b] rounded-xl shadow-soft px-6 py-8 mx-auto text-lg leading-relaxed text-[#223055] dark:text-[#eaf1fc]">
          <p>
            <span className="font-semibold text-primary">Sekolab</span> adalah platform edukasi coding & AI ramah Indonesia. Dirancang khusus untuk belajar programming dan kecerdasan buatan dengan pengalaman interaktif dan fitur bantuan AI.
          </p>
          <p className="mt-6">
            Platform ini dibuat oleh <span className="font-semibold">Codex Dev</span>.<br/>
            <span className="block mt-2">Presented by <span className="text-accent font-semibold">Urdemonlord</span> alias <span className="font-semibold">Hasrinata Arya Afendi</span>, mahasiswa <span className="text-primary font-semibold">Universitas Muhammadiyah Semarang (UNIMUS)</span>.</span>
          </p>
          <p className="mt-6 opacity-80 italic">
            Terima kasih sudah menggunakan & mendukung karya anak bangsa 🚀
          </p>
        </div>
      </div>
    </div>
  )
};
export default About;
