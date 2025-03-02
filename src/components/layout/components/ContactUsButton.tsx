"use client";

import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ContactUsButton = () => {
  const t = useTranslations("Shared");
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/contact-us")}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 2rem",
        gap: "6px",
        borderRadius: "52px",
        background: "#E0E324",
        backdropFilter: "blur(24px)",
        color: "#001014",
        textAlign: "center",
        fontWeight: 600,
        height: { xs: "4rem", md: "5rem" },
      }}
    >
      {t("Contact")}
    </Button>
  );
};

export default ContactUsButton;
