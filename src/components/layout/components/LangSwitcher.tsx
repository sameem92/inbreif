"use client";

import { Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("Shared");

  const [isPending, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLanguage }
      );
    });
  };

  return (
    <div className="select-wrapper">
      <select
        className="language-select"
        defaultValue={locale}
        onChange={handleChange}
        disabled={isPending}
      >
        <option value="en">{t("en")}</option>
        <option value="ar">{t("ar")}</option>
        <option value="de">{t("de")}</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
