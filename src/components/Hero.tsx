import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

      <div className="container mx-auto px-4 z-10">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Completează Evenimentul Tău cu</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-500">
              Muzică Excepțională
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Servicii profesionale de DJ și Muzică live pentru nunți, evenimente corporate
            și petreceri private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-gradient-to-r from-purple-600 to-accent-500 hover:from-purple-700 hover:to-accent-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Serviciile Noastre
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-white hover:border-purple-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Vezi Portofoliul
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;