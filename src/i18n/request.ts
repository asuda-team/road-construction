import { getLocale } from '@/shared/configs';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`../shared/messages/${locale}.json`)).default,
  };
});
