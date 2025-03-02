"use client";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const FooterLink = ({ title, path }: { title: string; path: string }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(path);
  };

  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Kumbh Sans, sans-serif",
        fontSize: "1.6rem",
        fontWeight: 400,
        lineHeight: "1.6rem",
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
          color: " #e0e324",
        },
      }}
      onClick={handleNavigation}
    >
      {title}
    </Typography>
  );
};

export default FooterLink;
