import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  position: string;
  image: string;
  responsability: string;
  linkedinUrl: string;
  email: string;
  color: string;
};

export const TeamCard = ({
  name,
  position,
  image,
  responsability,
  linkedinUrl,
  email,
  color,
}: TeamCardProps) => {
  return (
    <div className="w-[19.375rem] h-[26.875rem] rounded-lg border border-[#EAECF0] flex flex-col">
      <div
        className={cn(
          "items-center justify-center rounded-t-lg",
          `bg-[#${color}]`
        )}
      >
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          className="h-[14.375rem] self-center"
        />
      </div>
      <div></div>
    </div>
  );
};
