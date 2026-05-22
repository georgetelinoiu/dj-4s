import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [formState, handleSubmit] = useForm("xvgaleoo");
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Date de Contact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pregătit să faci evenimentul tău de neuitat? Contactează-ne astăzi pentru disponibilitate,
            prețuri și orice întrebări ai putea avea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`md:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Informații de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Locație</h4>
                    <p className="text-gray-400">București</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <Clock size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Program</h4>
                    <p className="text-gray-400">Non Stop</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Telefon</h4>
                    <a
                      href="tel:0749304439"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      0749304439
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href="mailto:andreipatru303@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      andreipatru303@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-medium mb-4">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/4Smusic.events"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/4Smusic.events"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Rezervă Evenimentul</h3>
              
              {formState.succeeded ? (
                <div className="bg-green-900/20 border border-green-800 text-green-400 rounded-lg p-4 flex items-center">
                  <div className="mr-3 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p>Mulțumim pentru mesaj! Te vom contacta în curând.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Numele Tău *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        pattern="[A-Za-z\s]+"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <ValidationError prefix="Name" field="name" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Adresa de Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Număr de Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-1">
                        Data Evenimentului
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <ValidationError prefix="Event Date" field="eventDate" errors={formState.errors} />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-1">
                        Tipul Evenimentului *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Selectează Tipul Evenimentului</option>
                        <option value="nunta">Nuntă</option>
                        <option value="corporate">Eveniment Corporate</option>
                        <option value="aniversare">Aniversare</option>
                        <option value="botez">Botez</option>
                        <option value="altele">Altele</option>
                      </select>
                      <ValidationError prefix="Event Type" field="eventType" errors={formState.errors} />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Mesajul Tău *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={10}
                        maxLength={1000}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Spune-ne despre evenimentul tău, preferințele muzicale și orice cerințe speciale..."
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center justify-center transition-all ${
                      formState.submitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-700'
                    }`}
                  >
                    {formState.submitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Trimite Mesajul
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;