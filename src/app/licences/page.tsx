'use client'

import { useLicences } from "@/entities/licences/hooks";
import { imagePath } from "@/shared/utils";
import { FileIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const LicencesPage = () => {
  const t = useTranslations();
  const { licences } = useLicences();

  return (
    <div className='container mx-auto py-36 px-6 lg:px-0 sm:py-32 bg-gradient-to-b from-darkBlue/[0.02] to-transparent'>
      <div className='space-y-5 md:space-y-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-[#27374D] text-center">{t('navigation.licence')}</h2>
        <div className="max-w-5xl mx-auto border border-neutral-200 rounded-xl divide-y-[1px] divide-neutral-200 overflow-hidden">
          {licences.map((licence) => (
            <div key={licence.id} className="py-4 px-4 hover:bg-neutral-100 transition-colors flex flex-row items-center gap-3">
              <FileIcon size={32} />
              <h2 className="flex-1 text-lg font-medium text-darkBlue truncate">{licence.name as string}</h2>
              <a href={imagePath(licence.license as string)} target={'_blank'} download className="bg-green-600 hover:bg-green-700 transition-colors py-2 px-3 rounded-xl">
                <span className="text-white font-medium">{t('licence.download')}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default LicencesPage;