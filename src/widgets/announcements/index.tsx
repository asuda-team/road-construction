'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANNOUNCEMENTS } from './config';

gsap.registerPlugin(ScrollTrigger);

export const Announcements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    if (!container || !header) return;

    gsap.from(header.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    const items = gsap.utils.toArray('.announcement-item');
    items.forEach((item) => {
      gsap.set(item as Element, { 
        opacity: 0,
        x: -20,
      });

      ScrollTrigger.create({
        trigger: item as Element,
        start: 'top bottom-=50',
        onEnter: () => {
          gsap.to(item as Element, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
        once: true
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='relative py-20'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            Bildirişler
          </h1>
          <p className="text-lg text-blueGray/80 leading-relaxed">
            Ýol gurluşygy we ulag düzümi barada resmi bildirişler we beýannamalar.
          </p>
        </div>

        <div ref={containerRef} className="space-y-6">
          {ANNOUNCEMENTS.map((announcement, index) => (
            <div 
              key={index}
              className="announcement-item group bg-white hover:bg-darkBlue/[0.02] border border-darkBlue/5 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-darkBlue/5 flex-shrink-0 flex items-center justify-center mt-1">
                  {announcement.type === 'tender' ? (
                    <svg className="w-6 h-6 text-darkBlue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ) : announcement.type === 'vacancy' ? (
                    <svg className="w-6 h-6 text-darkBlue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-darkBlue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-blueGray/60">{announcement.date}</span>
                    {announcement.deadline && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-blueGray/20" />
                        <span className="text-sm text-blueGray/60">Möhleti: {announcement.deadline}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-darkBlue mb-3 group-hover:text-darkBlue/80 transition-colors">
                    {announcement.title}
                  </h3>

                  <p className="text-base text-blueGray/70 mb-4 leading-relaxed">
                    {announcement.description}
                  </p>

                  <button 
                    className="relative group/btn inline-flex items-center gap-2"
                  >
                    <span className="text-darkBlue font-medium">
                      Giňişleýin
                    </span>
                    <svg 
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-darkBlue/20 group-hover/btn:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
