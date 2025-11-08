'use client';

import { useNews } from '@/entities/news/hooks';
import { NewsCard } from '@/entities/news/ui';
import { useTranslations } from 'next-intl';
import { Slab } from 'react-loading-indicators';

export default function NewsPage() {
  const { news, isPending } = useNews();
  const t = useTranslations();

  if (isPending) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Slab size={"large"} color={"#27374D"} />
      </div>
    )
  };

  return (
    <div className='container mx-auto py-36 px-6 lg:px-0 sm:py-32 bg-gradient-to-b from-darkBlue/[0.02] to-transparent'>
      <h2 className="text-3xl md:text-4xl font-bold text-[#27374D] text-center mb-12">{t("navigation.news")}</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {news.map((data) => <NewsCard data={data} key={data.id} />)}
      </div>
    </div>
  );
}