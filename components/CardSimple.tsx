"use client";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

type Info = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

export const CardSimple = ({image, title, description}: Info) => {
  const t = useTranslations("CardsHome");

  return (
    <>
      <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-xl transition-all hover:bg-blue-500 duration-500">
        <Image src={image} alt={t(title)} />
        <h4 className="text-white text-2xl font-medium mt-3">
          {t(title)}
        </h4>
        <p className="text-indigo-200 text-sm mt-3">{t(description)}</p>
      </div>
    </>
  );
};
