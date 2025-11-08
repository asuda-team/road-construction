'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { IBanner } from '@/entities/banners/model';
import { imagePath } from '@/shared/utils';

interface BannerCardProps {
  banner: IBanner;
  isActive: boolean;
  isNext: boolean;
}

export const BannerCard = ({ banner, isActive, isNext }: BannerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      if (isActive) {
        // Current banner slides out to left
        gsap.to(cardRef.current, {
          xPercent: -100,
          duration: 0.8,
          ease: 'power1.inOut',
        });
      } else if (isNext) {
        // Next banner slides in from right
        gsap.fromTo(
          cardRef.current,
          {
            xPercent: 100,
            display: 'block',
          },
          {
            xPercent: 0,
            duration: 0.8,
            ease: 'power1.inOut',
          }
        );
      } else {
        // Reset other banners
        gsap.set(cardRef.current, {
          xPercent: 100,
          display: 'none',
        });
      }
    }
  }, [isActive, isNext]);

  return (
    <div className={`absolute inset-0 w-full ${!isActive && !isNext ? 'hidden' : 'block'}`}>
      <Link href={banner.link as string} className="block h-[60vh] w-full">
        <div ref={cardRef} className="relative h-full w-full opacity-80">
          <Image
            src={imagePath(banner.file as string)}
            alt={banner.link as string}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </Link>
    </div>
  );
};