import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col text-xl font-bold text-white mb-4">
              <span>
                <span className="text-white">S</span><span className="text-accent-500">4</span><span className="text-gray-400">Music</span>
              </span>
              <span className="text-white">Events</span>
            </div>
            <p className="mb-6">
              Servicii profesionale de DJ și formație pentru toate ocaziile. Creăm experiențe muzicale de neuitat.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              {[
                ['Acasă', 'home'],
                ['Despre Noi', 'about'],
                ['Servicii', 'services'],
                ['Portofoliu', 'portfolio'],
                ['Contact', 'contact']
              ].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Servicii</h3>
            <ul className="space-y-2">
              {[
                'Servicii DJ',
                'Formație Live',
                'Entertainment Nunți',
                'Evenimente Corporate',
                'Petreceri Private'
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="hover:text-purple-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📍</span>
                <span>București</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📞</span>
                <span>0749304439</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✉️</span>
                <span>patruevents@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">⏰</span>
                <span>Non Stop</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="flex items-center justify-center gap-1">
            <span>Realizat cu</span>
            <Heart className="text-pink-500" size={16} fill="currentColor" />
            <span>de S4 Music Events © {new Date().getFullYear()}. Toate drepturile rezervate.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;