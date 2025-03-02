import Social from "@/components/tools/social/social";
import { Box, Container } from "@mui/material";

import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import ValuesSection from "./ValuesSection";

export default function Home() {
  return (
    <>
      <Social />

      <Box
        className="home"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "4.8rem",
          padding: "10rem 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "8rem 8rem 100px",
          },
          "@media (max-width: 1240px)": {
            padding: "6rem 6rem 100px",
          },
          "@media (max-width: 992px)": {
            padding: "4rem 4rem 100px",
          },
          "@media (max-width: 578px)": {
            padding: "4rem 2rem 100px",
          },
        }}
      >
        <HeroSection />

        <Container
          sx={{
            display: "flex",
            gap: { xs: "5rem", lg: "10rem" },
            flexDirection: "column",
          }}
          maxWidth="lg"
        >
          <FeaturesSection />
          <ValuesSection />
          <TeamSection />
        </Container>
      </Box>
    </>
  );
}
