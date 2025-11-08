'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNews } from "@/entities/news/hooks";
import { NewsCard } from '@/entities/news/ui';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export const News = () => {
  const { news } = useNews();
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = sectionRef.current?.querySelector('h2');
      if (title) {
        gsap.fromTo(
          title,
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

      const cards = newsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: newsRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return news.length > 0 ? (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#27374D] text-center mb-12">{t('navigation.news')}</h2>

        <div
          ref={newsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {news.slice(0, 8).map(news => <NewsCard key={news.id} data={news} />)}
        </div>
      </div>
    </section>
  ) : null;
};