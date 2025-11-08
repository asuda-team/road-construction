'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-md transition-shadow"
    >
      <div className="w-24 h-24 mx-auto mb-4">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-[#27374D] text-center mb-2">
        {company.name}
      </h3>
      <p className="text-[#526D82] text-center text-sm">
        {company.description}
      </p>
    </div>
  );
};