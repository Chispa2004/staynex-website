"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { type Locale, locales, translations } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    let stored: string | null = null;
    try { stored = window.localStorage.getItem("staynex-locale"); } catch { /* Storage is optional. */ }

    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try { window.localStorage.setItem("staynex-locale", nextLocale); } catch { /* Keep language usable without storage. */ }
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale]
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
