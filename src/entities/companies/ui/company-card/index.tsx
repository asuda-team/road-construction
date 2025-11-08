import Image from "next/image";
import { ICompany } from "../../model";
import { imagePath } from "@/shared/utils";
import Link from "next/link";

interface Props {
  data: ICompany;
}

const CompanyCard = ({ data }: Props) => {
  const { id, name, files } = data;

  return (
    <Link href={`/companies/${id}`} className="relative">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={imagePath(files[0].path)}
          alt={name as string}
          className="object-contain"
          sizes={'112px'}
          fill
        />
      </div>
      <div className="px-2 py-4">
        <h2 className="text-lg font-semibold text-darkBlue line-clamp-2">{name as string}</h2>
      </div>
    </Link>
  )
};

CompanyCard.displayName = 'CompanyCard';

export default CompanyCard;