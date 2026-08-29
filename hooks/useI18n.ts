'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../shared/i18n';

export const useI18n = (namespace?: string | string[]) => {
  const namespaces = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : ['common'];

  const { t, i18n, ready } = useTranslation(namespaces);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHydrated(true), 0);

    const syncLanguageToCookie = (lng: string) => {
      document.cookie = `i18nextLng=${lng}; path=/; max-age=31536000; SameSite=Lax`;
    };

    syncLanguageToCookie(i18n.language);

    i18n.on('languageChanged', syncLanguageToCookie);

    return () => {
      clearTimeout(timer);
      i18n.off('languageChanged', syncLanguageToCookie);
    };
  }, [i18n]);

  return {
    t: isHydrated && ready ? t : (key: string, options?: any) => key,
    i18n,
    ready: isHydrated && ready,
    currentLanguage: i18n.language,
    isHydrated,
    changeLanguage: i18n.changeLanguage.bind(i18n),
  };
};
