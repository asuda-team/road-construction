'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const topLineRef = useRef<SVGPathElement>(null);
  const middleLineRef = useRef<SVGPathElement>(null);
  const bottomLineRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const topLine = topLineRef.current;
    const middleLine = middleLineRef.current;
    const bottomLine = bottomLineRef.current;

    if (!svg || !topLine || !middleLine || !bottomLine) return;

    gsap.set([topLine, middleLine, bottomLine], {
      attr: { 'stroke-width': 2 },
      stroke: '#DDE6ED',
      y: 0,
      rotation: 0,
      opacity: 1,
      clearProps: 'all'
    });

    tlRef.current = gsap.timeline({ paused: true })
      .to(topLine, {
        y: 6,
        duration: 0.25,
        ease: 'power2.inOut'
      })
      .to(bottomLine, {
        y: -6,
        duration: 0.25,
        ease: 'power2.inOut'
      }, '<')
      .to(middleLine, {
        opacity: 0,
        duration: 0.1,
        ease: 'power2.inOut'
      }, '<')
      .to(topLine, {
        rotation: 45,
        transformOrigin: '50% 50%',
        duration: 0.25,
        ease: 'power2.inOut'
      })
      .to(bottomLine, {
        rotation: -45,
        transformOrigin: '50% 50%',
        duration: 0.25,
        ease: 'power2.inOut'
      }, '<');

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;

    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <button 
      className="lg:hidden relative z-[50] w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        ref={svgRef}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-[50]"
      >
        <path
          ref={topLineRef}
          d="M6 10H26"
          stroke="#DDE6ED"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={middleLineRef}
          d="M6 16H26"
          stroke="#DDE6ED"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={bottomLineRef}
          d="M6 22H26"
          stroke="#DDE6ED"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};