'use client';
import { Locale } from '@/i18n/config';
import { useLocale } from 'next-intl';
import { startTransition, useCallback } from 'react';
import { setLocale } from '../configs/locale';

const useLanguage = () => {
  const locale = useLocale();

  const onChangeLanguage = useCallback((value: string) => {
    const locale = value as Locale;

    startTransition(() => {
      setLocale(locale);
    });
  }, []);

  return { currentLanguage: locale as Locale, onChangeLanguage };
};

export default useLanguage;
