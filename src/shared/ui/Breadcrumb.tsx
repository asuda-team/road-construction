'use client'

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const t = useTranslations();

  return (
    <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="hover:text-darkBlue transition-colors"
      >
        {t('navigation.home')}
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-neutral-400">/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-darkBlue transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-darkBlue font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

