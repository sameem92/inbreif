import { Container } from "@mui/material";
import { ReactNode } from "react";

const SwiperCardContainer = ({
  children,
  ref,
  ...props
}: {
  children: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <Container
      ref={ref}
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        "@media (min-width:1025px)": {
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

export default SwiperCardContainer;
