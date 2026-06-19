import { useState, useEffect, useRef } from 'react';

interface BlurUpImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
}

export default function BlurUpImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  referrerPolicy = 'no-referrer',
}: BlurUpImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Derive a low-resolution blurred thumbnail for beautiful progressive loading
  useEffect(() => {
    if (src.includes('unsplash.com')) {
      // Modify Unsplash queries to fetch a tiny, pre-blurred 30px thumbnail
      try {
        const url = new URL(src);
        url.searchParams.set('w', '30');
        url.searchParams.set('q', '20');
        url.searchParams.set('blur', '15');
        setThumbSrc(url.toString());
      } catch {
        setThumbSrc(src);
      }
    } else {
      setThumbSrc(null);
    }
    
    // Reset loaded status for the new source
    setIsLoaded(false);
  }, [src]);

  // Robust check for cached images that are already loaded when the component mounts or updates
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setIsLoaded(true);
      }
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-art-taupe-bg select-none ${containerClassName}`}>
      {/* 1. Pulse skeleton layer */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-r from-art-cream via-art-taupe-bg to-art-cream animate-shimmer opacity-80"
          style={{ backgroundSize: '200% 100%' }}
        >
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-art-taupe-bg/5 pointer-events-none" />
        </div>
      )}

      {/* 2. Low-Resolution blurred canvas overlay to avoid flash of white */}
      {thumbSrc && !isLoaded && (
        <img
          src={thumbSrc}
          alt=""
          role="presentation"
          referrerPolicy={referrerPolicy}
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 z-0 transition-opacity duration-500 ease-out opacity-100"
        />
      )}

      {/* 3. True High-Resolution Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        referrerPolicy={referrerPolicy}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 filter-none scale-100' : 'opacity-0 blur-lg scale-105'
        }`}
      />
    </div>
  );
}

