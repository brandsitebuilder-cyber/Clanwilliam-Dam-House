import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-500 border-b ${
    isScrolled || isMobileMenuOpen
      ? 'bg-brand-50/95 backdrop-blur-md border-brand-200 py-4' 
      : 'bg-transparent border-transparent py-8'
  }`;

  const textClass = (isScrolled || isMobileMenuOpen) ? 'text-brand-900' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="cursor-pointer group" 
          onClick={() => scrollToSection('hero')}
        >
          <span className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-300 ${textClass}`}>
            Breathtaking
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Residence', 'Amenities', 'Gallery', 'Reviews', 'Location'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-500 transition-colors ${textClass}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className={`px-8 py-3 border text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-900 hover:text-white hover:border-brand-900 ${
              isScrolled 
                ? 'border-brand-900 text-brand-900' 
                : 'border-white text-white'
            }`}
          >
            Reserve
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={textClass} strokeWidth={1.5} />
          ) : (
            <Menu className={textClass} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[73px] bg-brand-50 z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {['Residence', 'Amenities', 'Gallery', 'Reviews', 'Location'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl font-serif text-brand-900 hover:text-brand-500"
            >
              {item}
            </button>
          ))}
          <button
             onClick={() => scrollToSection('booking')}
             className="mt-4 px-10 py-4 bg-brand-900 text-white text-sm uppercase tracking-widest"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;