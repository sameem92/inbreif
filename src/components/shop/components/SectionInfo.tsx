import MotionWrapper from "@/components/tools/MotionWrapper";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface SectionInfoProps {
  title: string;
  description: string;
}

const SectionInfo: FC<SectionInfoProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.75rem",
      }}
    >
      <MotionWrapper
        type="h1"
        className="main-seo-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {title}
      </MotionWrapper>
      <Typography
        sx={{
          textAlign: "center !important",
          maxWidth: "790px",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "44px",
          letterSpacing: "0%",
          color: "#fff",
          "@media (max-width: 500px)": {
            fontSize: "20px",
            lineHeight: "32px",
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SectionInfo;
