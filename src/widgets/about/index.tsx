'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ORGANIZATIONS } from './config';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(statsRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')
    .from(listRef.current?.children || [], {
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative pt-20 pb-20"
    >
      <div className="relative max-w-7xl mx-auto px-0 md:px-8 z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-8 md:mb-12 text-darkBlue leading-tight"
            >
              Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi
            </h2>
            
            <div 
              ref={textRef}
              className="prose prose-lg text-blueGray/90"
            >
              <p className="mb-8 leading-relaxed">
                Hormatly Arkadagymyzyň 2022-nji ýylyň 3-nji fewralynda geçiren Ministrler Kabinetiniň nobatdaky Mejlisinde ýurdumyzda awtomobil ýollarynyň pudagyny dolandyrmagy has-da kämilleşdirmek maksady bilen, Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi döredildi.
              </p>
              <p className="leading-relaxed">
                Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentliginiň düzüm gurluşy 5 müdirlikden we 12 bölümden ybarat bolup durýar.
              </p>
            </div>

            <div 
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="border-l-2 border-darkBlue/10 pl-6">
                <h3 className="text-4xl font-bold text-darkBlue mb-2">1361</h3>
                <p className="text-blueGray/70 uppercase text-sm tracking-wider">Köpri</p>
              </div>
              <div className="border-l-2 border-darkBlue/10 pl-6">
                <h3 className="text-4xl font-bold text-darkBlue mb-2">13 782</h3>
                <p className="text-blueGray/70 uppercase text-sm tracking-wider">Kilometr ýol</p>
              </div>
              <div className="border-l-2 border-darkBlue/10 pl-6">
                <h3 className="text-4xl font-bold text-darkBlue mb-2">18</h3>
                <p className="text-blueGray/70 uppercase text-sm tracking-wider">Edara-kärhana</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-24 space-y-12">
              <div className="relative z-[1]">
                <Image
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c"
                  alt="Road construction"
                  width={800}
                  height={600}
                  className="rounded-lg w-full object-cover aspect-[4/3]"
                />
              </div>
              <div 
                ref={listRef}
                className="relative z-[1] md:border border-darkBlue/5 rounded-lg md:p-8 bg-white/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-darkBlue mb-8 uppercase tracking-wider">
                  Agentliginiň garamagyndaky edaralar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {ORGANIZATIONS.map((org, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-sm text-blueGray/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-darkBlue/30" />
                      {org}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] mt-10 md:mt-20 border-t border-darkBlue/5 pt-12">
          <p className="text-lg text-blueGray/80 leading-relaxed">
            Agentligiň garamagyndaky edara-kärhanalar ýurdumyzda 1361 sany köpri we umumy uzynlygy 13 782,32 kilometr bolan döwlet we ýerli ähmiýetli awtomobil ýollarynyň durkuny täzelemek, möwsümleýin, aralyk işlerini ýerine ýetirmek bilen, täze awtomobil ýollaryny gurýar. Häzirki döwürde agentligiň edara-kärhanalary tarapyndan umumy uzynlygy 1676 kilometr bolan döwlet ähmiýetli Türkmenbaşy-Farap we Aşgabat-Daşoguz awtomobil ýollarynyň gurluşygy, Oba milli maksatnamasyna laýyklykda, welaýatlaryň çäginde, täze döredilýän obalara barýan awtomobil ýollaryny gurmak we durkuny täzelemek işleri dowam edýär.
          </p>
        </div>
      </div>
    </section>
  );
};