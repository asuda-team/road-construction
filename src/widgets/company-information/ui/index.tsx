'use client'

import { useInformation } from "@/entities/information/hooks";
import { RichTextDisplay } from "@/shared/ui/RichTextDisplay";
import { imagePath } from "@/shared/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CompanyInformation = () => {
  const t = useTranslations();
  const { details } = useInformation();

  return details ? (
    <section id={'company-information'} className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-10 items-center">
        <div className="space-y-10 col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue mb-4 tracking-tight drop-shadow-md">
            {t('navigation.about-agency')}
          </h2>
          <div>
            <RichTextDisplay
              content={(details?.description as string).slice(0, 300)}
              className="text-lg md:text-xl font-medium text-neutral-700 leading-relaxed mb-6"
            />
          </div>
          <Link
            href={'/about'}
            className="inline-block px-6 py-3 bg-blueGray text-white font-semibold rounded-lg shadow-md hover:bg-darkBlue/80 transition"
          >
            {t('information.read-more', { defaultValue: 'Read more' })}
          </Link>
        </div>
        <div className="col-span-2 flex justify-center w-full">
          {details?.files?.[1] ? (
            <video
              controls
              className="rounded-xl w-full max-h-80 shadow-xl border border-indigo-200 bg-black/80"
            >
              <source src={imagePath(details.files[1].path)} type="video/mp4" />
              <track kind="captions" />
            </video>
          ) : null}
        </div>
      </div>
    </section>
  ) : null;
};

CompanyInformation.displayName = 'CompanyInformation';

export default CompanyInformation;