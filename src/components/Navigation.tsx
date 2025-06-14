
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SekolabLogo from './SekolabLogo';
import { Link } from "react-router-dom"; // Tambahkan import ini

// Komponen tombol dark mode switch
function ThemeSwitch() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ||
        document.documentElement.classList.contains("dark")
      : false
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    // init theme from localStorage
    const lsTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (lsTheme === "dark") setDark(true);
    else if (lsTheme === "light") setDark(false);
  }, []);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="rounded-full p-2 transition-colors border border-transparent hover:border-primary bg-secondary dark:bg-[#253060] text-primary dark:text-accent hover:bg-primary/10 inline-flex items-center"
      aria-label={dark ? 'Mode Terang' : 'Mode Gelap'}
      title={dark ? 'Mode Terang' : 'Mode Gelap'}
      type="button"
    >
      {dark ? (
        // icon matahari
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 20 20"><path d="M10 15a5 5 0 110-10 5 5 0 010 10zm0 3a1 1 0 01-1-1V16a1 1 0 012 0v1a1 1 0 01-1 1zm0-15a1 1 0 01-1-1V2a1 1 0 012 0v1a1 1 0 01-1 1zm8 8a1 1 0 01-1-1h-1a1 1 0 110-2h1a1 1 0 011 1zm-15 0a1 1 0 01-1-1H2a1 1 0 110-2h1a1 1 0 011 1zm11.364 7.364a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.415l-.707.706a1 1 0 01-1.414 0zm-10.728 0a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.415l-.707.706a1 1 0 01-1.414 0zm10.728-12.728a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.415l.707-.706a1 1 0 011.414 0zm-10.728 0a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.415l.707-.706a1 1 0 011.414 0z"/></svg>
      ) : (
        // icon bulan
        <svg width={20} height={20} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a1 1 0 00-1.24 1.238A6 6 0 0012 18a6 6 0 007.055-6.533 1 1 0 00-1.238-1.24 7.987 7.987 0 01-0.524-0.934z"/></svg>
      )}
    </button>
  );
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kursus', href: '/courses' },
    { label: 'Playground', href: '/playground' },
    { label: 'Tentang', href: '/about' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/85 dark:bg-[#192340e0] backdrop-blur-md border-b border-[#e2eaf6] dark:border-[#23304b] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <SekolabLogo size="sm" />
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#223055] dark:text-[#eaf1fc] hover:text-primary dark:hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Tombol dark mode */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeSwitch />
            <Link to="/auth">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                Masuk
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Daftar Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e2eaf6] dark:border-[#23304b] animate-fade-in bg-white/95 dark:bg-[#222e49]">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#223055] dark:text-[#eaf1fc] hover:text-primary dark:hover:text-accent transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    Masuk
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    Daftar Gratis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

