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
        "@media (min-width:1025px)": {
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          gap: "0px",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default SwiperCardContainer2;
