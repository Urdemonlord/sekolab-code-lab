
import { Button } from '@/components/ui/button';

const PlaygroundPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Coding Playground
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tulis, test, dan jalankan kode langsung di browser. 
              Tidak perlu install software apapun!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Editor Code Modern</h3>
                  <p className="text-gray-600">Syntax highlighting, autocomplete, dan error detection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Multi Language</h3>
                  <p className="text-gray-600">Support Python, JavaScript, HTML/CSS, dan lainnya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Real-time Output</h3>
                  <p className="text-gray-600">Lihat hasil kode secara langsung</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8"
            >
              🚀 Coba Playground
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-xl shadow-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">playground.py</span>
              </div>
              
              <div className="font-mono text-sm">
                <div className="text-purple-400">def</div>
                <span className="text-blue-400"> hello_sekolab</span>
                <span className="text-white">():</span>
                <br />
                <span className="text-white ml-4">print(</span>
                <span className="text-green-400">"Selamat datang di Sekolab!"</span>
                <span className="text-white">)</span>
                <br />
                <span className="text-white ml-4">print(</span>
                <span className="text-green-400">"Mari belajar coding bersama! 🚀"</span>
                <span className="text-white">)</span>
                <br />
                <br />
                <div className="text-yellow-400">hello_sekolab()</div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-green-400 font-mono text-sm">
                  <div>Selamat datang di Sekolab!</div>
                  <div>Mari belajar coding bersama! 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundPreview;
