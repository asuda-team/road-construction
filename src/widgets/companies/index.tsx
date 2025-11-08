'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCompanies } from '@/entities/companies/hooks';
import { CompanyCard } from '@/entities/companies/ui';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export const Companies = () => {
  const t = useTranslations();
  const { companies } = useCompanies();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleElement = sectionRef.current?.querySelector('h2');
      if (titleElement) {
        gsap.fromTo(
          titleElement,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }

      // Animate cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return companies.length > 0 ? (
    <section
      ref={sectionRef}
      className="py-20 bg-[#DDE6ED]"
    >
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#27374D] text-center mb-12">{t('navigation.companies')}</h2>

        <div
          ref={cardsRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {companies.map(company => <CompanyCard key={company.id} data={company} />)}
        </div>
      </div>
    </section>
  ) : null;
};