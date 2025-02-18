import { Box } from "@mui/material";
import style from "./styles/mobileComponent.module.scss";

import Social from "@/components/tools/social/social";
import Work from "@/components/tools/work/work";

import FeaturesSection from "./featuresSection";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className={style.mobileComponent}>
      <Social />

      <Hero />

      <Box
        sx={{
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
          background:
            "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
        }}
      >
        <Work />
      </Box>

      <FeaturesSection />
    </div>
  );
}
