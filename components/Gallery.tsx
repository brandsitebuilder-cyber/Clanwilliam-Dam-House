import React from 'react';
import DriveImage from './DriveImage';

// Using the images provided to populate the gallery grid
const photos = [
  // --- Original Set ---
  // Large Featured Image
  { 
    driveId: "1YNAp1bjm7OpTmlh-7-vvFiBezAlett2a", 
    span: "md:col-span-2 md:row-span-2" 
  },
  // Small Top Right
  { 
    driveId: "1mUwORbJmme0Mmkc_CKP4ReWBxHrPtHaH", 
    span: "md:col-span-1 md:row-span-1" 
  },
  // Small Middle Right
  { 
    driveId: "1dPsBbtu7gmS1a3lwUBodW5HVYt9vcvk0", 
    span: "md:col-span-1 md:row-span-1" 
  },
  // Vertical Bottom Left (Starts Row 3)
  { 
    driveId: "1fxGhjbrk-8vpiAl7zM4To6HcxBLhecKD", 
    span: "md:col-span-1 md:row-span-2" 
  },
  // Small Bottom Middle
  { 
    driveId: "1lpQAylJNMcGhaUpfMl4CNKUS6II6czpI", 
    span: "md:col-span-1 md:row-span-1" 
  },
  // Small Bottom Right
  { 
    driveId: "1BoquuH72XdQsTWwMZx6frMp_s3SzSgpo", 
    span: "md:col-span-1 md:row-span-1" 
  },

  // --- New Set ---
  // Filling the gap left by the vertical image (Row 4, Col 2)
  {
    driveId: "1LcdldHPmRviIf-DjJONfrlJeIMVbO9fj",
    span: "md:col-span-1 md:row-span-1"
  },
  // Filling the gap left by the vertical image (Row 4, Col 3)
  {
    driveId: "11wpcuM21cUwIpzoOUzYXm1RXCMJ7qwDY",
    span: "md:col-span-1 md:row-span-1"
  },
  
  // New Large Block (Starts Row 5)
  {
    driveId: "1VXxrSrYTUjtIjz09uJC86pVsBDxMQNnj",
    span: "md:col-span-2 md:row-span-2"
  },
  // Side Stack 1
  {
    driveId: "1ik54eay3jJ6RX4aZV7h850G0cmiAtiku",
    span: "md:col-span-1 md:row-span-1"
  },
  // Side Stack 2
  {
    driveId: "1QK9k2IobGdPSog61APgWSn_KY1jEVA14",
    span: "md:col-span-1 md:row-span-1"
  },
  
  // Grand Finale (Full Width)
  {
    driveId: "1trUESSQ4Vbb8nfRR0tCbLLJITcg3aI8A",
    span: "md:col-span-3 md:row-span-2"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-900">Visual Narrative</h2>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mt-4 md:mt-0">
            Interiors & Surroundings
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group ${photo.span}`}
            >
              <DriveImage 
                id={photo.driveId}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;