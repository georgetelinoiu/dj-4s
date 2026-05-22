import React, { useEffect, useRef, useState } from 'react';
import { Award, Music, Users, Star } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { icon: <Award size={24} />, value: '50+', label: 'Evenimente' },
    { icon: <Users size={24} />, value: '7', label: 'Ani de Experiență' },
    { icon: <Star size={24} />, value: '5.0', label: 'Rating' },
  ];

  const teamMembers = [
    {
      name: 'Pătru Andrei',
      role: 'DJ',
      description: 'Cu o pasiune autentică pentru muzică și o cultură muzicală vastă în vârstă de 25 de ani, aduce la fiecare eveniment o latură modernă, plin de energie și rafinament sonor. Deschis către toate stilurile muzicale – de la pop, dance, house și hip-hop, până la muzică de petrecere sau oldies. Mixaje fluide și personalizate, tranziții fine între genuri și o atenție deosebită la detalii fac ca fiecare moment să curgă natural și energic, fără întreruperi.',
      image: `${import.meta.env.BASE_URL}andrei_1.jpeg`
    },
    {
      name: 'Silvia Ioniță',
      role: 'Solistă Principală',
      description: 'Având 22 de ani, a terminat liceul de muzica "Dinu Lipatti", fiind in prezent studentă la prestigioasa Universitate de Muzica din București pe secția de jazz vocal/instrumental. Poate adopta orice stil muzical, de la muzică ușoară la jazz, la muzică de petrecere și inclusiv instrumental pian.',
      image: `${import.meta.env.BASE_URL}silvia_1.jpeg`
    },
    {
      name: 'Rosian Alexandru',
      role: 'Solist și Chitarist',
      description: 'Având 25 de ani, solist pasionat de chitară și voce, cu experiență muzicală din copilărie, activând de la 7 ani în muzica ușoară, folk, pop, rock, muzică de petrecere.',
      image: `${import.meta.env.BASE_URL}alex.jpeg`
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-500">
              Despre Noi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-purple-600 to-accent-500 opacity-20 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="DJ performing at an event"
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-4">Servicii Profesionale de DJ & Muzică Live</h3>
            <p className="text-gray-300 mb-6">
              S4 Music Events oferă servicii profesionale de DJ și spectacole live, adaptate pentru o gamă variată de evenimente – de la petreceri private și evenimente corporate, până la momente acustice speciale.
            </p>
            <p className="text-gray-300 mb-8">
              Echipa noastră reunește DJ experimentați și muzicieni talentați, pasionați de muzică și dedicați creării unor experiențe memorabile. Cu echipamente performante și un repertoriu muzical divers, asigurăm o atmosferă energică și captivantă, pe gustul fiecărui invitat.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-12 text-center">Echipa Noastră</h3>
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                    <p className="text-purple-400 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;