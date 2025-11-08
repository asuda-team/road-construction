import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={'/logo.png'}
      alt={'Logo'}
      width={80}
      height={80}
      className="h-full w-auto object-contain"
      priority
    />
  )
};

Logo.displayName = 'Logo';
