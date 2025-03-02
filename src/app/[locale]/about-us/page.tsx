import Home from "@/components/about/Home";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "AboutPage.metadata",
  });

  return {
    title: t("title"),
  };
}

export default function Main() {
  return <Home />;
}
