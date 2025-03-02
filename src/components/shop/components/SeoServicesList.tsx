import MotionWrapper from "@/components/tools/MotionWrapper";
import { services1 } from "@/constants/campaigns";
import { Box, Stack } from "@mui/material";
import { ServiceCard } from "./ServiceCard";

const SeoServicesList = () => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: "4rem", md: "5rem", lg: "6rem" },
          width: "100%",
        }}
      >
        <Stack
          sx={{
            display: "grid",
            rowGap: { xs: "8rem", md: "6rem" },
            gridAutoFlow: "dense",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on extra small screens
              sm: "repeat(2, minmax(250px, 1fr))", // 2 columns
              md: "repeat(3, minmax(250px, 1fr))", // 3 columns
              lg: "repeat(4, minmax(250px, 1fr))", // 4 columns
              xl: "repeat(5, minmax(250px, 1fr))", // 5 columns
            },

            columnGap: "3rem",
            justifyItems: "center", // Center the cards horizontally
            alignItems: "center", // Center the cards vertically
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {services1.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </MotionWrapper>
  );
};

export default SeoServicesList;
