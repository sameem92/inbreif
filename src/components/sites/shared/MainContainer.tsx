import { Container } from "@mui/material";
import { ReactNode } from "react";

const MainContainer = ({
  children,
  ref,
}: {
  children: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <Container
      ref={ref}
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "44px",
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "100px 1rem",
        },
        "@media (max-width: 992px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 480px)": {
          padding: "10rem 2rem",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
