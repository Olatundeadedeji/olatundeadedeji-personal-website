'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  showFallback?: boolean;
}

export default function ProfileImage({
  src,
  alt,
  width = 600,
  height = 600,
  priority = true,
  className = '',
  objectPosition = 'center top',
  showFallback = true,
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load profile image: ${src}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Fallback avatar with initials
  const FallbackAvatar = () => (
    <div className={`bg-gradient-to-br from-brand to-accent text-white flex items-center justify-center text-4xl font-bold ${className}`}>
      OA
    </div>
  );

  if (imageError && showFallback) {
    return <FallbackAvatar />;
  }

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className={`absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse ${className}`} />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`${className} transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          objectPosition: objectPosition,
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
        quality={90}
      />
    </div>
  );
}

// Specialized component for hero section with multiple positioning options
export function HeroProfileImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <ProfileImage
      src={src}
      alt={alt}
      width={600}
      height={600}
      priority={true}
      objectPosition="center 20%" // Positions face higher in the frame
      className={`w-full h-72 sm:h-96 object-cover rounded-2xl shadow-soft transition-transform duration-700 ease-out hover:scale-105 ${className}`}
    />
  );
}

// Component with adjustable face positioning
export function AdjustableProfileImage({
  src,
  alt,
  facePosition = 'center-top',
  className = '',
}: {
  src: string;
  alt: string;
  facePosition?: 'center-top' | 'center-center' | 'center-bottom' | 'left-top' | 'right-top';
  className?: string;
}) {
  const positionMap = {
    'center-top': 'center 15%',
    'center-center': 'center center',
    'center-bottom': 'center 85%',
    'left-top': '25% 15%',
    'right-top': '75% 15%',
  };

  return (
    <ProfileImage
      src={src}
      alt={alt}
      objectPosition={positionMap[facePosition]}
      className={`w-full h-72 sm:h-96 object-cover rounded-2xl shadow-soft transition-transform duration-700 ease-out hover:scale-105 ${className}`}
    />
  );
}
