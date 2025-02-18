import { Grid, Box, Button, Paper, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Item = styled(Paper)({
  textAlign: "center",
  boxShadow: "none",
});

const arrow = "/image/arrow.png";

const ServiceBox = ({ imgSrc, title, href }) => {
  const router = useRouter();
  const t = useTranslations();

  const handleNavigation = () => {
    router.push(href);
  };

  return (
    <Grid item xs={6} custom992={4} lg={4}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "tween", stiffness: 300, damping: 10 }}
      >
        <Box
          onClick={handleNavigation}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: {
              xs: "1rem !important",
              sm: "1.4rem !important",
              lg: "1.2rem !important",
            },
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover h3": { color: "#E0E327" },
            "&:hover .arrow-icon": { opacity: 1 },
            "@media(max-width:600px)": {
              ".service-box": { height: "200px" },
              ".third-title": { fontSize: "1.8rem" },
            },
            "@media(max-width:480px)": {
              ".service-box": { height: "140px" },
              ".third-title": { fontSize: "1.4rem" },
            },
          }}
        >
          <Item
            sx={{
              height: "260px",
              width: "292px",
              maxWidth: "100%",
              mb: { xs: 0, sm: 2 },
              padding: "0 !important",
            }}
            className="service-box hover"
          >
            <div
              className="content"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                height={200}
                width={200}
                style={{
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={imgSrc}
                alt={title}
              />
            </div>
          </Item>
          {/* <Box maxWidth="292px"> */}
          <h2 className="third-title">{title}</h2>
          {/* </Box> */}
          <Button
            variant="text"
            sx={{
              color: "#E0E327",
              backgroundColor: "transparent",
              fontFamily: "Kumbh Sans, sans-serif !important",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1.6rem",
              lineHeight: "2rem",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.2s ease",
              padding: "0px",
              "&:hover": {
                color: "#E0E327",
                backgroundColor: "transparent",
                transform: "translateY(0px)",
              },
              ".arrow-icon": { opacity: 0 },
            }}
          >
            <Image
              src={arrow}
              alt="arrow"
              width={24}
              height={24}
              className="arrow-icon"
            />
            <span>{t("Shared.LearnMore")}</span>
          </Button>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default ServiceBox;
