import React from 'react';
import { Wifi, Waves, Wind, ChefHat, Tv, Car, Flame, Shield, Droplets, Anchor } from 'lucide-react';
import { Amenity } from '../types';

const amenitiesList: Amenity[] = [
  { icon: Waves, title: "Swimming Pool", description: "Private sparkling pool with safety net options." },
  { icon: Shield, title: "Secure Estate", description: "Located within a gated security estate." },
  { icon: Flame, title: "Braai Facilities", description: "Indoor fireplace & built-in outdoor braai." },
  { icon: Wind, title: "Climate Control", description: "Air conditioning in all 4 bedrooms." },
  { icon: ChefHat, title: "Gourmet Kitchen", description: "Ice machine, gas stove, oven & Nespresso." },
  { icon: Droplets, title: "Scullery", description: "Dishwasher, washing machine & tumble dryer." },
  { icon: Tv, title: "Entertainment", description: "Smart TV with DStv & uncapped Wi-Fi." },
  { icon: Anchor, title: "Boat Parking", description: "Secure parking for 3 vehicles and a boat." },
];

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:w-1/2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 block mb-4">What you'll find here</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-900">Curated Comforts</h2>
          <p className="mt-6 text-brand-500 font-light">
            Every detail has been considered to ensure your Clanwilliam escape is as convenient as it is luxurious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {amenitiesList.map((item, index) => (
            <div key={index} className="group cursor-default">
              <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                <item.icon strokeWidth={1} className="w-8 h-8 text-brand-900" />
              </div>
              <h3 className="font-serif text-xl text-brand-900 mb-3">{item.title}</h3>
              <p className="text-brand-500 text-sm leading-relaxed border-l border-brand-200 pl-4 group-hover:border-brand-900 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;