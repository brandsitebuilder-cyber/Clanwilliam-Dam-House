import React from 'react';
import DriveImage from './DriveImage';

const About: React.FC = () => {
  // Using new IDs from the provided list for variety
  const mainImageId = "1lpQAylJNMcGhaUpfMl4CNKUS6II6czpI"; 
  const detailImageId = "1BoquuH72XdQsTWwMZx6frMp_s3SzSgpo"; 

  return (
    <section id="residence" className="py-32 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image Grid - Asymmetrical */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="w-[90%] h-[500px] shadow-xl grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <DriveImage 
                  id={mainImageId}
                  alt="Modern Living Room"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-4 w-[60%] z-20">
              <div className="w-full h-[300px] shadow-2xl border-8 border-brand-50 overflow-hidden">
                <DriveImage 
                  id={detailImageId}
                  alt="Exterior Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-12 pt-12 lg:pt-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-900"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">The Residence</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-brand-900 mb-8 leading-[1.1]">
              Sanctuary of <br/>
              <span className="italic text-brand-600">Modern Luxury.</span>
            </h2>
            
            <p className="text-brand-600 text-lg font-light leading-relaxed mb-6 max-w-md">
              A premier self-catering villa situated in a secure estate on the banks of Clanwilliam Dam, designed for absolute comfort and effortless entertaining.
            </p>
            
            <div className="space-y-6 text-brand-500 text-sm leading-relaxed mb-10">
              <p>
                <strong>Sleeping Arrangements:</strong> The home offers four spacious bedrooms, each furnished with a Queen-size bed and its own en-suite bathroom. The main suite features a full bathroom (bath and shower), while the three guest suites offer modern showers. All rooms are air-conditioned for your comfort.
              </p>
              <p>
                <strong>Living & Entertaining:</strong> The open-plan design connects a state-of-the-art kitchen (complete with separate scullery and ice machine) to the dining and lounge areas. Stacking doors dissolve the boundary between indoors and the covered patio, which features both dining space and a built-in braai.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              {[
                { label: 'Bedrooms', value: '4x Queen' },
                { label: 'Bathrooms', value: '4 En-suite' },
                { label: 'View', value: 'Panoramic' },
                { label: 'Parking', value: '3 Cars + Boat' },
              ].map((stat, i) => (
                <div key={i} className="border-t border-brand-200 pt-4">
                  <span className="block font-serif text-2xl md:text-3xl text-brand-900 mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-brand-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;