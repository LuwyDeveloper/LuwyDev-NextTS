"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { icons } from "@/assets/imagenes";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/context/LocaleContext";

export const ButtonLang = () => {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: Locale) => {
    setLocale(lng);
    setOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);


  return (
    <div ref={ref} className="relative text-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="w-10 h-10 flex justify-center items-center rounded-lg bg-zinc-50/10 transition-all hover:bg-blue-500"
      >
        <Image
          src={locale === "es" ? icons.spain : icons.usa}
          alt={locale === "es" ? "Español" : "English"}
          width={20}
          height={20}
        />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute z-50 mt-1 p-2 right-0 w-36 bg-[#0a1a33] rounded-lg shadow-lg border border-gray-700"
        >
          <li
            role="menuitem"
            onClick={() => changeLanguage("es")}
            className="flex items-center gap-2 px-2 py-1 text-sm rounded-lg hover:bg-gray-700 cursor-pointer"
          >
            <Image src={icons.spain} alt="Español" width={16} height={16} />
            Español
          </li>

          <li
            role="menuitem"
            onClick={() => changeLanguage("en")}
            className="flex items-center gap-2 px-2 py-1 text-sm rounded-lg hover:bg-gray-700 cursor-pointer"
          >
            <Image src={icons.usa} alt="English" width={16} height={16} />
            English
          </li>
        </ul>
      )}
    </div>
  );
};
