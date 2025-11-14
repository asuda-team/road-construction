'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const t = useTranslations();
  const heroRef = useRef<HTMLDivElement>(null);
  const symbolsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: '+=100%',
          scrub: 1.5,
        },
      });

      tl.to(symbolsRef.current, {
        yPercent: -35,
        ease: 'power3',
      }, 0)
        .to(contentRef.current, {
          yPercent: -45,
          ease: 'none',
        }, 0);

      gsap.fromTo(
        symbolsRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.3,
          ease: 'power2.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-darkBlue to-darkBlue"
    >

      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
      />
      <Image src={'/road-2.png'} alt={'hero-image'} fill />
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm z-10' />
      <div className="container relative mx-auto px-6 z-20">
        <div
          className="text-center text-white mb-6"
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 leading-tight tracking-tight max-w-5xl mx-auto">{t('hero.title')}</h1>
          {/* <p className="text-base md:text-xl text-[#DDE6ED]/80 max-w-2xl mx-auto font-light">{t('hero.description')}</p> */}
        </div>
        {/* <div className='relative'>
          <div className='absolute -top-6 left-0 right-0 z-10'>
            <div className='mx-auto px-4 py-6 w-fit bg-darkBlue rounded-xl'>
              <Link href={'/about'} className='px-4 py-3 w-fit bg-blueGray text-white rounded-xl hover:bg-blueGray/80 transition-colors'>{t('navigation.about-agency')}</Link>
            </div>
          </div>
          <div className='mx-auto relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden'>
            <Image
              blurDataURL='LtEz{Ef*jCa$O_bcofkBIUkBWZjZ'
              loading="eager"
              src={'/road.png'}
              alt={'hero'}
              fill
            />
            <div className='absolute inset-0 bg-black/10' />
          </div>
        </div> */}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <CaretDownIcon size={28} className="text-[#DDE6ED]/50" weight="bold" />
      </div>
    </section>
  );
};