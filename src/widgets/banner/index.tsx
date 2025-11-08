'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BannerCard } from './ui/BannerCard';
import { useBanners } from '@/entities/banners/hooks';

export const Banner = () => {
  const { banners } = useBanners();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  const getNextIndex = useCallback((current: number) => (current + 1) % banners.length, [banners]);

  useEffect(() => {
    // Auto-slide every 3 seconds
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => getNextIndex(prev));
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, getNextIndex]);

  return banners.length > 0 ? (
    <section className="relative w-full bg-darkBlue section-reveal">
      <div className='container mx-auto'>
        {/* Banner Container */}
        <div className="relative h-[60vh] overflow-hidden">
          {banners.map((banner, index) => (
            <BannerCard
              key={banner.id}
              banner={banner}
              isActive={index === currentIndex}
              isNext={index === getNextIndex(currentIndex)}
            />
          ))}

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-10">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};