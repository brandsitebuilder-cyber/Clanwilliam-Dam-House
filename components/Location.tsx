import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import DriveImage from './DriveImage';

const Location: React.FC = () => {
  // Using a distinct image for the location section
  const locationImageId = "1mUwORbJmme0Mmkc_CKP4ReWBxHrPtHaH"; 

  return (
    <section id="location" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-4 block">Destination</span>
            <h2 className="font-serif text-4xl text-brand-900 mb-8">Raw Wilderness</h2>
            <p className="text-brand-500 leading-relaxed mb-8">
              2.5 hours north of Cape Town lies the Cederberg. A place of red rocks, ancient art, and crystal waters. The house sits privately on the dam's edge.
            </p>
            <div className="flex items-center gap-4 text-brand-900 font-medium">
               <MapPin className="w-5 h-5" />
               <span>Clanwilliam, Western Cape</span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-widest border-b border-brand-200 pb-1 hover:border-brand-900 transition-colors">
              Get Directions <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
          <div className="md:w-2/3 h-[400px] w-full bg-brand-100 relative overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
             <DriveImage 
               id={locationImageId}
               alt="Map Location Scenic View"
               className="w-full h-full object-cover"
             />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-brand-900 rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-4 h-4 bg-brand-900 rounded-full relative shadow-xl border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;