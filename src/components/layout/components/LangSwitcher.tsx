"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Shared");

  const [language, setLanguage] = useState<string>(locale);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || locale;

    if (savedLang !== locale && pathname) {
      setLanguage(savedLang);
      const newPathname = pathname.startsWith(`/${locale}`)
        ? pathname.replace(`/${locale}`, `/${savedLang}`)
        : `/${savedLang}${pathname}`;

      router.replace(newPathname);
    }
  }, [locale]); // Only run when locale changes

  const switchLanguage = (newLocale: string) => {
    if (pathname) {
      const newPathname = pathname.startsWith(`/${locale}`)
        ? pathname.replace(`/${locale}`, `/${newLocale}`)
        : `/${newLocale}${pathname}`;

      localStorage.setItem("language", newLocale);
      router.push(newPathname);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    switchLanguage(newLanguage);
  };

  return (
    <div className="select-wrapper">
      <select
        className="language-select"
        value={language}
        onChange={handleChange}
      >
        <option value="en">{t("en")}</option>
        <option value="ar">{t("ar")}</option>
        <option value="de">{t("de")}</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
