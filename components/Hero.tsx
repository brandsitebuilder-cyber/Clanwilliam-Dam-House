import React from 'react';
import { ArrowDown } from 'lucide-react';
import DriveImage from './DriveImage';

const Hero: React.FC = () => {
  // The specific ID provided for the Hero background
  const googleDriveId = "1zIgavzMIhb_awmlpP56DBbqnx2SnS4ko";

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-brand-900">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full">
        {/* Darker overlay for better text contrast against the real photo */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <DriveImage 
          id={googleDriveId}
          alt="Clanwilliam Dam House Hero"
          className="w-full h-full object-cover animate-slow-zoom"
          priority={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <div className="overflow-hidden mb-8">
           <p className="animate-fade-in-up text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 drop-shadow-md font-medium">
            Clanwilliam Dam, Western Cape
          </p>
        </div>
        
        <h1 className="animate-fade-in-up font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 opacity-0 [animation-delay:200ms] fill-mode-forwards drop-shadow-2xl">
          Breathtaking
        </h1>
        
        <p className="animate-fade-in-up max-w-lg text-sm md:text-lg font-light leading-relaxed text-white/95 mb-12 opacity-0 [animation-delay:400ms] fill-mode-forwards drop-shadow-md">
          Experience the untamed beauty of the Cederberg from a sanctuary of modern luxury.
        </p>
        
        <div className="animate-fade-in-up opacity-0 [animation-delay:600ms] fill-mode-forwards">
          <button 
            onClick={() => document.getElementById('residence')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-200 transition-colors"
          >
            <span className="pb-1 border-b border-white/50 group-hover:border-white transition-all duration-300">
              View Residence
            </span>
          </button>
        </div>
      </div>

      <div className="relative z-20 absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/70" strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;