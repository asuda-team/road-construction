'use client'

import { useNewsDetails } from "@/entities/news/hooks";
import { RichTextDisplay } from "@/shared/ui/RichTextDisplay";
import { Breadcrumb } from "@/shared/ui";
import { imagePath } from "@/shared/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Slab } from "react-loading-indicators";

const NewsDetailsPage = () => {
  const { id } = useParams();
  const { details, isPending } = useNewsDetails(Number(id));
  const t = useTranslations();

  if (isPending) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Slab size={"large"} color={"#27374D"} />
      </div>
    )
  };

  if (!details) {
    return (
      <div className="min-h-screen grid place-items-center">
        <h2 className="text-xl font-semibold text-darkBlue">{t('empty.news')}</h2>
      </div>
    )
  }

  return (
    <div className="px-6 py-32 md:py-36 container mx-auto max-w-5xl space-y-10 md:space-y-20">
      <Breadcrumb
        items={[
          { label: t('navigation.news'), href: '/news' },
          { label: details.name as string }
        ]}
      />
      <div className="max-w-5xl w-full mx-auto space-y-10">
        {details.files?.[0]?.path && (
          <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src={imagePath(details.files[0].path)}
              sizes={'768px'}
              fill
              alt={details.name as string}
              className="object-contain"
            />
          </div>
        )}
        <div className="relative w-full inline-flex gap-3">
          <div className="h-auto w-3 bg-blueGray" />
          <h2 className="py-3 sm:pr-5 md:py-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-wrap font-bold text-darkBlue">{details.name as string}</h2>
        </div>
        <div>
          <RichTextDisplay
            content={details.description as string}
          />
        </div>
      </div>
    </div>
  )
};

export default NewsDetailsPage;