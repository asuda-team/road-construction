import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from '@/shared/ui';
import { NAV_LINKS } from '../config';
import { LanguageSelector } from './LanguageSelector';
import { useTranslations } from 'next-intl';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlay, {
        clipPath: 'circle(150% at top right)',
        duration: 0.8,
        ease: 'power4.inOut',
      });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(overlay, {
        clipPath: 'circle(0% at top right)',
        duration: 0.6,
        ease: 'power4.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div 
      ref={overlayRef}
      className="fixed top-0 right-0 w-full h-screen bg-gradient-to-b from-darkBlue to-[#1a2736] z-[9998] lg:hidden"
      style={{ clipPath: 'circle(0% at top right)' }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-6">
        {NAV_LINKS.map((link) => (
          <NavLink 
            key={link.href}
            href={link.href}
            className="text-offWhite text-2xl uppercase font-medium relative group"
            onClick={onClose}
          >
            {t(`navigation.${link.label}`)}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-offWhite/30 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        ))}
        
        <div className="mt-8">
          <LanguageSelector variant="mobile" />
        </div>
      </div>
    </div>
  );
};