"use client";

import { createContext, useContext } from "react";

export type Locale = 'es' | 'en';

type LocaleContextType = {
  locale: string;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined,
);

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale debe usarse dentro de un LocaleProvider");
  }

  return context;
};
