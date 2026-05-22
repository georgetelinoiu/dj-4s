import React, { useEffect, useRef, useState } from 'react';
import { Music2, Radio, Users } from 'lucide-react';

interface ServicePackage {
  title: string;
  description: string;
  idealFor: string[];
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

const Services: React.FC = () => {
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

  const packages: ServicePackage[] = [
    {
      title: 'Pachet DJ Standard',
      description: 'Serviciul nostru de DJ profesionist oferă o experiență muzicală completă, personalizată în funcție de stilul evenimentului tău. Playlist-uri atent selecționate, mixaje dinamice și interacțiune cu publicul – totul pentru o atmosferă memorabilă.',
      idealFor: ['Petreceri private', 'Nunți', 'Botezuri', 'Majorate', 'Evenimente corporate'],
      features: [
        'Lumină ambientală elegantă',
        'Jocuri de lumini',
        'Sonorizare de înaltă calitate adaptată spațiului',
        'Efect de fum ușor pentru un plus de atmosferă',
      ],
      icon: <Radio size={32} className="text-purple-400" />,
    },
    {
      title: 'Pachet DJ + Solistă/Solist',
      description: 'Combinăm versatilitatea unui DJ profesionist cu impactul live al unui solist/soliste care interpretează muzică ușoară, de petrecere și populară. Repertoriu adaptabil și prezență scenică ce animă orice tip de public.',
      idealFor: ['Nunți', 'Botezuri', 'Aniversări', 'Petreceri tematice', 'Majorate', 'Evenimente corporate'],
      features: [
        'Lumină ambientală profesională',
        'Jocuri de lumini pentru accentuarea atmosferei',
        'Sonorizare completă pentru DJ și prestații live',
        'Fum ușor pentru crearea momentelor de efect',
      ],
      icon: <Music2 size={32} className="text-purple-400" />,
      isPopular: true,
    },
    {
      title: 'Pachet Acustic Premium',
      description: 'Un pachet rafinat ce aduce emoție și eleganță în orice cadru. Combinăm talentul artiștilor live cu mixaje profesionale pentru o experiență muzicală completă.',
      idealFor: ['Evenimente restrânse', 'Recepții', 'Ceremonii', 'Cocktailuri', 'Brunchuri'],
      features: [
        'Solist(ă) vocal cu repertoriu variat (jazz, soul, balade, pop clasic)',
        'Chitarist cu backing vocals',
        'Pianistă la cerere',
        'DJ de fundal pentru tranziții line',
        'Lumină ambientală discretă și elegantă',
        'Sonorizare acustică profesională',
        'Efect de fum ușor, subtil și artistic',
      ],
      icon: <Users size={32} className="text-purple-400" />,
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-500">
              Pachete și Servicii
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Alegeți dintre pachetele noastre de DJ și formație live, adaptate pentru diferite evenimente și bugete.
            Toate pachetele pot fi personalizate conform cerințelor dumneavoastră specifice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {pkg.isPopular && (
                <div className="bg-gradient-to-r from-purple-600 to-accent-500 text-white text-center text-sm py-1 font-medium">
                  Cel Mai Popular
                </div>
              )}
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Ideal pentru:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.idealFor.map((item, i) => (
                      <span key={i} className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-gray-300">
                      <span className="text-purple-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block text-center py-3 px-5 rounded-full transition-all font-medium ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-purple-600 to-accent-500 text-white hover:from-purple-700 hover:to-accent-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Solicită Ofertă
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 mb-6">
            Nu găsiți exact ce căutați? Oferim pachete personalizate pentru a se potrivi nevoilor și bugetului dumneavoastră specific.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-accent-500 hover:from-purple-700 hover:to-accent-700 text-white font-medium py-3 px-8 rounded-full transition-all"
          >
            Solicită Ofertă Personalizată
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;