import { NavLink } from '@/shared/ui';
import { NAV_LINKS } from '../config';
import { useTranslations } from 'next-intl';

export const DesktopNav = () => {
  const t = useTranslations();

  return (
    <div className="hidden lg:flex items-center gap-4 lg:gap-4">
      {NAV_LINKS.map((link) => (
        <NavLink 
          key={link.href}
          href={link.href}
          className="text-offWhite text-sm uppercase tracking-wider font-medium relative group py-2"
        >
          {t(`navigation.${link.label}`)}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blueGray to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </NavLink>
      ))}
    </div>
  );
};
