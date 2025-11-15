import Image from "next/image";
import { INews } from "../../model";
import { imagePath } from "@/shared/utils";
import Link from "next/link";
import { RichTextDisplay } from "@/shared/ui/RichTextDisplay";

interface Props {
  data: INews
};

const NewsCard = ({ data }: Props) => {
  const { id, name, description, files } = data;

  return (
    <Link href={`/news/${id}`}>
      <div className="w-full group flex flex-col cursor-pointer">
        <div className="relative aspect-video bg-neutral-100 rounded-md">
          <Image
            src={imagePath(files[0].path)}
            alt={name as string}
            fill
            sizes="112px"
            className="size-full aspect-video object-contain"
          />
        </div>
        <div className="py-4 space-y-3">
          <h2 className="text-lg font-semibold text-darkBlue line-clamp-2">{name as string}</h2>
          <div className="w-full h-[1px] bg-neutral-200" />
          <RichTextDisplay 
            content={description as string}
            className="text-sm text-neutral-500 line-clamp-3"
          />
        </div>
      </div>
    </Link>
  )
};

NewsCard.displayName = 'NewsCard';

export default NewsCard;