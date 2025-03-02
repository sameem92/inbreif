import MainComponent from "@/components/marketing/MainComponent";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "DesignMotion.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Main() {
  return <MainComponent />;
}
