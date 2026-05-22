import React, { useRef, useState, useEffect } from 'react';
import { Camera, Video, Mail, ExternalLink, FolderOpen } from 'lucide-react';

const Portfolio: React.FC = () => {
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
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-500">
              Portofoliul Nostru
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-accent-500 mx-auto mb-6"></div>
          
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                <div className="flex items-center gap-2 text-purple-400">
                  <Camera size={24} />
                  <span className="text-gray-300">Fotografii</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Video size={24} />
                  <span className="text-gray-300">Videoclipuri</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail size={24} />
                  <span className="text-gray-300">Testimoniale</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">
                Descoperă momentele speciale pe care le-am creat pentru clienții noștri! 
                Vizitează galeria noastră completă cu fotografii și videoclipuri din evenimente anterioare.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://drive.google.com/drive/folders/1TOUmr2QKGIjDnbp7tMr6XND7cpVlhsNS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-accent-500 hover:from-purple-700 hover:to-accent-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
                >
                  <FolderOpen size={20} className="mr-2" />
                  Vezi Galeria Completă
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-purple-400 hover:border-purple-300 text-purple-400 hover:text-purple-300 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
                >
                  <Mail size={20} className="mr-2" />
                  Contactează-ne
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;