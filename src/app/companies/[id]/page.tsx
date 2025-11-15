'use client'

import { useCompanyDetails } from "@/entities/companies/hooks";
import { RichTextDisplay } from "@/shared/ui/RichTextDisplay";
import { imagePath } from "@/shared/utils";
import { useTranslations } from "next-intl";
import Image from "next/image"
import { useParams } from "next/navigation";
import { Slab } from "react-loading-indicators";

const CompanyDetailsPage = () => {
  const { id } = useParams();
  const { details, isPending } = useCompanyDetails(Number(id));
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
        <h2 className="text-xl font-semibold text-darkBlue">{t('empty.agency')}</h2>
      </div>
    )
  }

  return (
    <div className="px-6 py-32 md:py-36 container mx-auto max-w-5xl space-y-10 md:space-y-10">
      <div>
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-wrap font-bold text-darkBlue">{details.name as string}</h2>
      </div>
      <div className="space-y-10">
        <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden bg-neutral-100">
          <Image
            src={imagePath(details.files[0].path)}
            sizes={'768px'}
            fill
            alt={details.name as string}
            className="object-contain"
          />
        </div>
        <RichTextDisplay
          content={details.description as string}
        />
      </div>
    </div>
  )
};

export default CompanyDetailsPage;