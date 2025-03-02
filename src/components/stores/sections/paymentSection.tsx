"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Components
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Images & Icons
import MotionWrapper from "@/components/tools/MotionWrapper";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Sector from "../../../../public/icons/sectorIcon.svg";
import Store from "../../../../public/icons/storeIcon.svg";
import Support from "../../../../public/icons/supportIcon.svg";
import Payment1 from "../../../../public/images/store/payments/payment1.svg";
import Payment10 from "../../../../public/images/store/payments/payment10.svg";
import Payment11 from "../../../../public/images/store/payments/payment11.svg";
import Payment12 from "../../../../public/images/store/payments/payment12.svg";
import Payment2 from "../../../../public/images/store/payments/payment2.svg";
import Payment3 from "../../../../public/images/store/payments/payment3.svg";
import Payment4 from "../../../../public/images/store/payments/payment4.svg";
import Payment5 from "../../../../public/images/store/payments/payment5.svg";
import Payment6 from "../../../../public/images/store/payments/payment6.svg";
import Payment7 from "../../../../public/images/store/payments/payment7.svg";
import Payment8 from "../../../../public/images/store/payments/payment8.svg";
import Payment9 from "../../../../public/images/store/payments/payment9.svg";

const payments = [
  <Payment1 key={1} />,
  <Payment2 key={2} />,
  <Payment3 key={3} />,
  <Payment4 key={4} />,
  <Payment5 key={5} />,
  <Payment6 key={6} />,
  <Payment7 key={7} />,
  <Payment8 key={8} />,
  <Payment9 key={9} />,
  <Payment10 key={10} />,
  <Payment11 key={11} />,
  <Payment12 key={12} />,
];

const counts = [
  { icon: <Store />, title: "list.item1", numbers: "+300" },
  { icon: <Sector />, title: "list.item2", numbers: "+20" },
  { icon: <Support />, title: "list.item3", numbers: "24 / 7" },
];

const PaymentSection = () => {
  const t = useTranslations("ECommerce.PaymentSection");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <div className="paymentSection">
      <div>
        <Grid
          ref={ref1}
          container
          spacing={{ xs: 6, md: 12 }}
          justifyContent="center"
          alignItems="center"
          gap="160px 40px"
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
              gap: "40px",
            },
            "@media (max-width: 480px)": {
              padding: "5rem 2rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <MotionWrapper
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="info">
                <h3>{t("title")}</h3>
                <h2>{t("subtitle")}</h2>
                <p>{t("description")}</p>
              </div>
            </MotionWrapper>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6 }}
            container
            spacing={2}
            sx={{
              height: "100%",
            }}
            display="flex"
            alignItems="center"
            height="100%"
          >
            {payments.map((item, i) => (
              <Grid size={{ xs: 3, sm: 4, lg: 2 }} key={i}>
                <MotionWrapper
                  initial={{ y: 100 }}
                  animate={isInView1 ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <MotionWrapper
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "tween",
                      stiffness: 300,
                      damping: 10,
                    }}
                  >
                    <Box className="hover rd-sm">
                      <div
                        className="content"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "80px",
                        }}
                      >
                        {item}
                      </div>
                    </Box>
                  </MotionWrapper>
                </MotionWrapper>
              </Grid>
            ))}
          </Grid>

          <Grid
            ref={ref2}
            size={{ xs: 12 }}
            container
            justifyContent="center"
            sx={{
              "@media (max-width: 767px)": {
                columnGap: "14px",
              },
            }}
          >
            {counts.map((count, index) => (
              <MotionWrapper
                initial={{ y: 100 }}
                animate={isInView2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={count.title}
                delay={index * 0.1}
              >
                <MotionWrapper
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div className="count">
                    <div className="content">
                      <div className="icon">{count.icon}</div>
                      <h4>{t(count.title)}</h4>
                      <span>{count.numbers}</span>
                    </div>
                  </div>
                </MotionWrapper>
              </MotionWrapper>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSection;
