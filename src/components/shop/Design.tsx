/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { DesignSections } from "@/constants/campaigns";
import { Container } from "@mui/material";
import DesignSection from "./components/DesignSection";
import MotionWrapper from "../tools/MotionWrapper";

export default function Design() {
  return (
    <MotionWrapper
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "6rem 0", md: "10rem 0", xl: "15rem 0" },
          gap: { xs: "8rem", md: "10rem" },
        }}
        maxWidth="lg"
      >
        {DesignSections.map((section, index) => (
          <DesignSection key={index} section={section} />
        ))}
      </Container>
    </MotionWrapper>
  );
}
