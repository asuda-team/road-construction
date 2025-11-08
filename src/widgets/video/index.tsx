'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Play } from '@phosphor-icons/react';

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Play button hover animation
      const playButton = playButtonRef.current;
      if (playButton) {
        playButton.addEventListener('mouseenter', () => {
          gsap.to(playButton, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        playButton.addEventListener('mouseleave', () => {
          gsap.to(playButton, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handlePlay = () => {
    if (videoRef.current && overlayRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        videoRef.current.pause();
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      className="py-20 bg-darkBlue"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Featured Presentation
        </h2>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="/images/news/infrastructure.jpg"
          >
            <source src="/videos/featured.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          >
            <button
              ref={playButtonRef}
              onClick={handlePlay}
              className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-[#27374D] transition-transform"
            >
              <Play size={32} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
