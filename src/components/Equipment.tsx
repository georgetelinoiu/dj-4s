import React, { useEffect, useRef, useState } from 'react';
import { Speaker, Music, Mic2, Laptop } from 'lucide-react';

const Equipment: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="equipment"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Echipamente Utilizate
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Echipamente Profesionale – Adaptate în Funcție de Locație și Numărul Invitaților
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Fiecare eveniment este unic, iar sonorizarea și efectele vizuale trebuie să reflecte perfect atmosfera dorită. 
            Echipamentele utilizate sunt selectate și configurate individual pentru fiecare spațiu (interior sau exterior) 
            și în funcție de numărul de invitați, asigurând o experiență impecabilă, atât acustic, cât și vizual.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-400">
              <Speaker size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Sonorizare Principală</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 2 Topuri active Electro-Voice ZLX-15P G2</li>
              <li>• Topuri pasive Electro-Voice ZX5</li>
              <li>• Mixer Behringer PMP 4000</li>
              <li>• Topuri HK Audio SONAR 115 Xi</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-400">
              <Music size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Sistem de Lumini</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 4 lumini ParLed Party Adaptive (RGB)</li>
              <li>• Laser party integrat</li>
              <li>• Mașină de fum ușor</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-400">
              <Laptop size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Echipament DJ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Căști Sennheiser HD 280 Pro</li>
              <li>• Laptop Lenovo LOQ</li>
              <li>• Platane Neumark Pro FX</li>
              <li>• Pupitru DJ</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-400">
              <Mic2 size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Microfoane</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Sennheiser AVX ME2</li>
              <li>• Sennheiser 835 Combo SET</li>
              <li>• Lavaliere + microfon de mână</li>
            </ul>
          </div>
        </div>

        <div className={`text-center text-gray-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-medium">
            Toate echipamentele sunt întreținute profesional, montate și operate de tehnicieni calificați, 
            pentru siguranță și performanță optimă în orice condiții.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipment;