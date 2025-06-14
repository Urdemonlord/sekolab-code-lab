
import { Button } from '@/components/ui/button';
import SekolabLogo from './SekolabLogo';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf1fc] via-white to-[#fff7e0] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <SekolabLogo size="lg" animated />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#223055] mb-6 leading-tight">
            Belajar Coding & AI
            <br />
            <span className="gradient-text">Jadi Mudah</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#3f4d6d] mb-8 max-w-3xl mx-auto leading-relaxed">
            Platform ramah dalam bahasa Indonesia untuk menguasai programming dan artificial intelligence. 
            Mulai dari nol hingga mahir!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-soft"
            >
              🚀 Mulai Belajar Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              📹 Lihat Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#223055]">Praktis & Interaktif</h3>
              <p className="text-[#506499]">Belajar dengan coding langsung di browser</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#223055]">AI-Powered</h3>
              <p className="text-[#506499]">Bantuan AI untuk mempercepat belajar</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🇮🇩</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#223055]">Bahasa Indonesia</h3>
              <p className="text-[#506499]">Mudah dipahami dalam bahasa sendiri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
