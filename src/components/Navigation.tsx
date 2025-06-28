
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SekolabLogo from './SekolabLogo';
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from '@/hooks/use-dark-mode';

// Komponen tombol dark mode switch yang lebih baik
function ThemeSwitch() {
  const { isDark, toggleDarkMode } = useDarkMode();
  
  return (
    <button
      onClick={toggleDarkMode}
      className="relative rounded-full p-2.5 transition-all duration-300 border border-border 
                 bg-background hover:bg-accent/10 hover:border-accent/50 
                 text-foreground hover:text-accent hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      type="button"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kursus', href: '/courses' },
    { label: 'Playground', href: '/playground' },
    { label: 'Tentang', href: '/about' },
  ];return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50 transition-all duration-300">
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16">
          <SekolabLogo size="sm" />
            {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>{/* Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeSwitch />
            <Link to="/auth">
              <Button 
                variant="outline" 
                size="sm" 
                className="btn-secondary hover:scale-105"
              >
                Masuk
              </Button>
            </Link>
            <Link to="/auth">
              <Button 
                size="sm" 
                className="btn-primary"
              >
                Daftar Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="sm"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent hover:bg-accent/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border glass-hover animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-3">
              {/* Main navigation */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block nav-link font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}              {/* Mobile buttons */}
              <div className="pt-4 space-y-3">
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full btn-secondary"
                  >
                    Masuk
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    size="sm" 
                    className="w-full btn-primary"
                  >
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
