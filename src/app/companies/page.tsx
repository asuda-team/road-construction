'use client';

import { useCompanies } from '@/entities/companies/hooks';
import CompanyCard from '@/entities/companies/ui/company-card';
import { useTranslations } from 'next-intl';
import { Slab } from 'react-loading-indicators';

export default function CompaniesPage() {
  const { companies, isPending } = useCompanies();
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
      <div className='space-y-5 md:space-y-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-[#27374D] text-center">{t('navigation.companies')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 '>
          {companies.map((company) => <CompanyCard data={company} key={company.id} />)}
        </div>
      </div>
    </div>
  );
}