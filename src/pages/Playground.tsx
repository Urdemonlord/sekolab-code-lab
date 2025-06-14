
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Playground = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(`def hello_sekolab():
    print("Selamat datang di Sekolab!")
    print("Mari belajar coding bersama! 🚀")
    
    # Coba ubah pesan di bawah ini
    nama = "Developer"
    print(f"Halo {nama}, selamat coding!")

hello_sekolab()`);

  const [output, setOutput] = useState(`Selamat datang di Sekolab!
Mari belajar coding bersama! 🚀
Halo Developer, selamat coding!`);

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'html', name: 'HTML/CSS', icon: '🎨' },
    { id: 'java', name: 'Java', icon: '☕' }
  ];

  const examples = [
    {
      title: "Hello World",
      description: "Program pertama untuk memulai coding",
      code: `print("Hello, Sekolab!")
print("Selamat belajar coding! 🚀")`
    },
    {
      title: "Calculator Sederhana",
      description: "Buat kalkulator untuk operasi dasar",
      code: `def calculator(a, b, operation):
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        return a / b if b != 0 else "Error: Division by zero"

# Test calculator
print("10 + 5 =", calculator(10, 5, '+'))
print("10 - 5 =", calculator(10, 5, '-'))
print("10 * 5 =", calculator(10, 5, '*'))
print("10 / 5 =", calculator(10, 5, '/'))`
    },
    {
      title: "List & Loop",
      description: "Pelajari penggunaan list dan perulangan",
      code: `# Daftar bahasa pemrograman populer
languages = ["Python", "JavaScript", "Java", "C++", "Go"]

print("Bahasa pemrograman populer:")
for i, lang in enumerate(languages, 1):
    print(f"{i}. {lang}")

# Filter bahasa yang mengandung "Java"
java_languages = [lang for lang in languages if "Java" in lang]
print(f"\\nBahasa dengan 'Java': {java_languages}")`
    }
  ];

  const runCode = () => {
    // Simulate code execution
    setOutput("🔄 Menjalankan kode...");
    setTimeout(() => {
      setOutput(`✅ Kode berhasil dijalankan!

${selectedLanguage === 'python' ? 'Selamat datang di Sekolab!\nMari belajar coding bersama! 🚀\nHalo Developer, selamat coding!' : 'Output akan muncul di sini setelah kode dijalankan.'}

💡 Tips: Coba modifikasi kode dan jalankan lagi untuk melihat perbedaannya!`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Coding Playground
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tulis, test, dan jalankan kode langsung di browser. Eksperimen dengan berbagai bahasa pemrograman!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Language Selector & Examples */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="rounded-xl shadow-soft">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Pilih Bahasa</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {languages.map(lang => (
                      <button
                        key={lang.id}
                        onClick={() => setSelectedLanguage(lang.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          selectedLanguage === lang.id 
                            ? 'bg-primary text-white' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-lg">{lang.icon}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-soft">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Contoh Kode</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {examples.map((example, index) => (
                      <div key={index} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                           onClick={() => setCode(example.code)}>
                        <h4 className="font-medium text-gray-900 mb-1">{example.title}</h4>
                        <p className="text-sm text-gray-600">{example.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Code Editor & Output */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="rounded-xl shadow-soft">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">
                        {languages.find(l => l.id === selectedLanguage)?.icon}
                      </span>
                      Editor - {languages.find(l => l.id === selectedLanguage)?.name}
                    </CardTitle>
                    <Button 
                      onClick={runCode}
                      className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6"
                    >
                      ▶️ Jalankan
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-64 bg-transparent text-green-400 resize-none focus:outline-none"
                      placeholder="Tulis kode Anda di sini..."
                      spellCheck={false}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-soft">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Output</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-green-400 whitespace-pre-wrap min-h-32">
                      {output}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cepat & Responsif</h3>
                  <p className="text-sm text-gray-600">Eksekusi kode dalam hitungan detik</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-2xl mb-2">🔒</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Aman & Terisolasi</h3>
                  <p className="text-sm text-gray-600">Environment yang aman untuk belajar</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-2xl mb-2">💾</div>
                  <h3 className="font-semibold text-gray-900 mb-1">Auto Save</h3>
                  <p className="text-sm text-gray-600">Kode tersimpan otomatis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Playground;
