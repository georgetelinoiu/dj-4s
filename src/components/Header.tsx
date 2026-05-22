import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <Music className="text-purple-500" size={28} strokeWidth={2} />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            S4 Music Events
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            ['Acasă', 'home'],
            ['Despre', 'about'],
            ['Servicii', 'services'],
            ['Portofoliu', 'portfolio'],
            ['Contact', 'contact']
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm uppercase tracking-wider hover:text-purple-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Rezervă Acum
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              ['Acasă', 'home'],
              ['Despre', 'about'],
              ['Servicii', 'services'],
              ['Portofoliu', 'portfolio'],
              ['Contact', 'contact']
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm uppercase tracking-wider py-3 border-b border-gray-800 hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center rounded-full text-sm uppercase tracking-wider hover:from-purple-700 hover:to-pink-700 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rezervă Acum
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;