
import SekolabLogo from './SekolabLogo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#223055] dark:bg-[#1a1f2e] text-white dark:text-foreground py-16 transition-all duration-300 border-t border-transparent dark:border-border">
      <div className="container-responsive">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <SekolabLogo size="md" />
            </div>
            <p className="text-[#bcc9e6] dark:text-muted-foreground text-lg mb-6 max-w-md">
              Platform belajar coding dan AI terbaik dalam bahasa Indonesia. 
              Mulai perjalanan tech mu bersama kami!
            </p>
            <div className="flex space-x-4">              <a href="#" className="text-[#bcc9e6] dark:text-muted-foreground hover:text-accent dark:hover:text-accent transition-colors p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>              <a href="#" className="text-[#bcc9e6] dark:text-muted-foreground hover:text-accent dark:hover:text-accent transition-colors p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.748 3.708 12.45s.49-2.448 1.297-3.323C5.901 8.25 7.048 7.76 8.346 7.76s2.448.49 3.323 1.297c.9.9 1.39 2.047 1.39 3.345s-.49 2.448-1.297 3.323c-.9.9-2.047 1.39-3.345 1.39z"/>
                </svg>
              </a>              <a href="#" className="text-[#bcc9e6] dark:text-muted-foreground hover:text-accent dark:hover:text-accent transition-colors p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Kursus</h3>
            <ul className="space-y-3 text-[#bcc9e6] dark:text-muted-foreground">
              <li><a href="#" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Python</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">JavaScript</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Machine Learning</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">React</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Data Science</a></li>
            </ul>
          </div>          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Bantuan</h3>
            <ul className="space-y-3 text-[#bcc9e6] dark:text-muted-foreground">
              <li><Link to="/faq" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Kontak</Link></li>
              <li><Link to="/terms" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy" className="hover:text-accent dark:hover:text-accent transition-colors block py-1">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#3756a0] dark:border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#bcc9e6] dark:text-muted-foreground text-sm">
            © 2024 Sekolab. Semua hak dilindungi.
          </p>
          <p className="text-[#bcc9e6] dark:text-muted-foreground text-sm mt-4 md:mt-0">
            Dibuat dengan <span className="text-accent">❤️</span> untuk developer Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
