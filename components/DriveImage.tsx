import React, { useState, useEffect } from 'react';

interface DriveImageProps {
  id: string;
  alt: string;
  className?: string;
  fallbackUrl?: string;
  priority?: boolean;
}

const DriveImage: React.FC<DriveImageProps> = ({ 
  id, 
  alt, 
  className = "", 
  fallbackUrl = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2400&auto=format&fit=crop",
  priority = false
}) => {
  // Strategy 1: Large Thumbnail (Fastest, avoids redirect limits)
  // We use w3840 to get the highest resolution available
  const primaryLink = `https://drive.google.com/thumbnail?id=${id}&sz=w3840`;
  
  // Strategy 2: Direct Export (Standard)
  const secondaryLink = `https://drive.google.com/uc?export=view&id=${id}`;

  const [imgSrc, setImgSrc] = useState(primaryLink);
  const [attempt, setAttempt] = useState(1);

  // Reset state if ID changes
  useEffect(() => {
    setImgSrc(primaryLink);
    setAttempt(1);
  }, [id, primaryLink]);

  const handleError = () => {
    if (attempt === 1) {
      // Primary failed, try secondary
      setImgSrc(secondaryLink);
      setAttempt(2);
    } else if (attempt === 2) {
      // Secondary failed, try fallback
      console.warn(`Drive image ${id}: Links failed. Using fallback.`);
      setImgSrc(fallbackUrl);
      setAttempt(3);
    }
  };

  return (
    <img 
      src={imgSrc}
      onError={handleError}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading={priority ? "eager" : "lazy"}
    />
  );
};

export default DriveImage;