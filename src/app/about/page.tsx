'use client';

import { useInformation } from '@/entities/information/hooks';
import { RichTextDisplay } from '@/shared/ui/RichTextDisplay';
import { imagePath } from '@/shared/utils';
import Image from 'next/image';
import { Slab } from 'react-loading-indicators';

export default function AboutPage() {
  const { details, isPending } = useInformation();

  if (isPending || !details) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Slab size={"large"} color={"#27374D"} />
      </div>
    )
  };

  return (
    <div className="px-6 py-32 md:py-36 container mx-auto max-w-5xl space-y-10 md:space-y-10">
      <div>
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-wrap font-bold text-darkBlue">{details.name as string}</h2>
      </div>
      <div className="space-y-10">
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
        <RichTextDisplay 
          content={details.description as string}
        />
        <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden bg-neutral-100">
          {details?.files?.[1] ? (
            <video
              controls
              className="rounded-xl w-full shadow-xl border border-indigo-200 bg-black/80"
            >
              <source src={imagePath(details.files[1].path)} type="video/mp4" />
              <track kind="captions" />
            </video>
          ) : null}
        </div>
      </div>
    </div>
  );
}