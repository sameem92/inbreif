import { Container } from "@mui/material";
import { ReactNode } from "react";

const SwiperCardContainer2 = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: "80px",
        "@media (min-width:1440px)": {
          flexDirection: "row",
          alignItems: "start",
          gap: "44px",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default SwiperCardContainer2;
