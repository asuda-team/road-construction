'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPinIcon, PhoneIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const isHome = pathname === '/';



  return (
    <footer
      className={`relative text-white pt-16 pb-8 z-[10] ${isHome ? '' : 'bg-darkBlue'}`}
    >
      {isHome ? <div className='absolute inset-0 backdrop-blur-xl -z-10' /> : null}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="footer-section">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Yoltaslama Logo"
              className="mb-2"
            />
            <p className="max-w-xs text-base text-neutral-300 font-semibold mb-6">{t('hero.title')}</p>
          </div>

          <div className="footer-section">
            <ul className="space-y-4">
              <li>
                <Link href="/news" className="text-neutral-300 hover:text-neutral-100 transition-colors">{t('navigation.news')}</Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-neutral-100 transition-colors">{t('navigation.about-agency')}</Link>
              </li>
              <li>
                <Link href="/licences" className="text-neutral-300 hover:text-neutral-100 transition-colors">{t('navigation.licence')}</Link>
              </li>
              <li>
                <Link href="/companies" className="text-neutral-300 hover:text-neutral-100 transition-colors">{t('navigation.companies')}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <ul className="space-y-4">
              <li className="flex items-center md:items-start gap-3 text-neutral-300">
                <div className='flex-shrink-0'>
                  <MapPinIcon size={20} />
                </div>
                <span className=''>{t('info.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <PhoneIcon size={20} />
                <a href={'tel:+993924700'}>924700</a>
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <div className='flex-shrink-0'>
                  <EnvelopeSimpleIcon size={20} />
                </div>
                <a href={`mailto:awtoroadagency@sanly.tm`}>awtoroadagency@sanly.tm</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-500 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
