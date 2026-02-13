import React from 'react';
import { Waves, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-brand-500" />
            <span className="text-xl font-serif font-bold text-white tracking-wide">
              Clanwilliam<span className="font-light">Escape</span>
            </span>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Breathtaking House Clanwilliam Dam. All rights reserved.</p>
            <div className="flex justify-center md:justify-end gap-6 mt-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;