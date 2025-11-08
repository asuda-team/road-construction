'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const useNavigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedSite');
    
    if (!hasVisited) {
      gsap.from(nav, { 
        duration: 0.4, 
        y: -100, 
        opacity: 0, 
        ease: 'power2.out',
        onComplete: () => {
          localStorage.setItem('hasVisitedSite', 'true');
        }
      });
    } else {
      // Reset position for subsequent renders
      gsap.set(nav, { y: 0, opacity: 1 });
    }

    // Scroll handler for nav hide/show
    const handleScroll = () => {
      if (isMenuOpen) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = scrollTop - lastScrollTopRef.current;
      
      if (Math.abs(scrollDelta) < 15) return;
      
      if (scrollTop > lastScrollTopRef.current && scrollTop > 100) {
        gsap.to(nav, { y: -100, duration: 0.4, ease: 'power2.inOut' });
      } else {
        gsap.to(nav, { y: 0, duration: 0.4, ease: 'power2.out' });
      }
      
      lastScrollTopRef.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return {
    navRef,
    isMenuOpen,
    setIsMenuOpen,
  };
};