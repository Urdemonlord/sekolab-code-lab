
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SekolabLogo from './SekolabLogo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kursus', href: '/courses' },
    { label: 'Playground', href: '/playground' },
    { label: 'Tentang', href: '/about' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/85 backdrop-blur-md border-b border-[#e2eaf6] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <SekolabLogo size="sm" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#223055] hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              Masuk
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Daftar Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e2eaf6] animate-fade-in bg-white/95">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#223055] hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  Masuk
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Daftar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
