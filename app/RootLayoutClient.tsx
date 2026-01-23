"use client";
import { useState, useEffect, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { LocaleContext, Locale } from "@/context/LocaleContext";
import "./globals.css";

type Messages = Record<string, string>;
type RootLayoutClientProps = { children: ReactNode };

const messagesCache = new Map<Locale, Messages>();

const loadMessages = async (locale: Locale): Promise<Messages> => {
  if (messagesCache.has(locale)) {
    return messagesCache.get(locale)!;
  }
  const messages = (await import(`@/messages/${locale}.json`)).default;
  messagesCache.set(locale, messages)
  return messages
};
export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es"
    const savedLocale = localStorage.getItem("locale")
    return savedLocale === "es" || savedLocale === "en" ? savedLocale : "es"
  });
  const [messages, setMessages] = useState<Messages | null>(null);
  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale)
  }

  useEffect(() => {
    loadMessages(locale)
      .then(setMessages)
      .catch(() => setMessages({}));
  }, [locale])

  if (!messages) return null

  return (

    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        onError={process.env.NODE_ENV === "production" ? () => null : undefined}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
