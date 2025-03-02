import ContactUsComponent from "@/components/contactUs/contactUs";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ContactUs.metadata",
  });

  return {
    title: t("title"),
  };
}

export default function ContactUsPage() {
  return <ContactUsComponent />;
}
