'use client';

import Link from 'next/link';
import { DesktopNav } from './ui/DesktopNav';
import { MobileNav } from './ui/MobileNav';
import { BurgerMenu } from './ui/BurgerMenu';
import { LanguageSelector } from './ui/LanguageSelector';
import { useNavigation } from './model/useNavigation';
import { Logo } from '@/shared/ui';

export const Navigation = () => {
  const { navRef, isMenuOpen, setIsMenuOpen } = useNavigation();

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 h-20 bg-darkBlue/95 backdrop-blur-md z-[9999] border-b border-blueGray/10"
      >
        <div className="container mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          <div className='inline-flex items-center gap-4'>
            <Link
              href="/"
              className="flex items-center h-full py-2 hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <div className="h-12 w-auto">
                <Logo />
              </div>
            </Link>

            <div className="hidden lg:flex items-center flex-1 justify-center">
              <DesktopNav />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <LanguageSelector variant="desktop" />

            <BurgerMenu
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>

      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};