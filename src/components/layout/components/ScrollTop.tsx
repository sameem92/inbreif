"use client";

import { Box, Fade, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import up from "../../../../public/image/up.png";

export default function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10, // Try setting a low threshold for testing
  });

  // Log to check when the trigger fires
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#goToHome");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          top: "85%",
          right: "3%",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <Image
          onClick={handleClick}
          width={50}
          height={50}
          src={up}
          alt="up"
          style={{ cursor: "pointer", width: "5rem", height: "5rem" }}
        />
      </Box>
    </Fade>
  );
}
