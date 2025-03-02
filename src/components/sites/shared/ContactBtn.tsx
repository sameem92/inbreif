"use client";

import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ContactBtn = () => {
  const router = useRouter();
  const t = useTranslations("InformationalReservation.HeroSection");

  return (
    <Button
      onClick={() => router.push("/contact-us")}
      sx={{
        paddingX: "24px",
        paddingY: "12px",
        borderRadius: 60,
        fontWeight: 600,
        fontSize: { sm: 18, md: 22 },
        background: "transparent",
        borderColor: "#e1e42a",
        borderWidth: 1,
        borderStyle: "solid",
        margin: 0,
        color: "white",
      }}
    >
      {t("contactButton")}
    </Button>
  );
};

export default ContactBtn;
