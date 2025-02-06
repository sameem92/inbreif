"use client";

import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../../../../public/images/procedures/1.png";
import image2 from "../../../../public/images/procedures/2.png";
import image3 from "../../../../public/images/procedures/3.png";
import image4 from "../../../../public/images/procedures/4.png";
import image5 from "../../../../public/images/procedures/5.png";
import image6 from "../../../../public/images/procedures/6.png";

const features = [
  {
    title: "نطاق مجاني",
    description: "احصل على نطاق احترافي مجاني يعزز هويتك الرقمية.",
    imageURL: image1,
  },
  {
    title: "إيميلات رسمية",
    description: "إنشاء بريد إلكتروني رسمي يعكس احترافية علامتك التجارية.",
    imageURL: image2,
  },
  {
    title: "لوحة تحكم مرنة",
    description: "تحكم كامل وسهل في موقعك وإعداداته دون تعقيد.",
    imageURL: image3,
  },
  {
    title: "شهادات حماية لأمان الموقع",
    description: "تأمين بيانات موقعك بشهادات SSL لحماية الزوار والمعلومات.",
    imageURL: image4,
  },
  {
    title: "دعم فني",
    description: "فريق متخصص متاح لمساعدتك وحل المشكلات بسرعة.",
    imageURL: image5,
  },
  {
    title: "توافق مع جميع الشاشات",
    description: "تصميم متجاوب يضمن تجربة مثالية على جميع الأجهزة.",
    imageURL: image6,
  },
];

const ProceduresSection = () => {
  return (
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
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <div className="proceduresSection">
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Stack>
            <h2 className="section-header">ضمنا لك أسرع الإجرائات</h2>
            <p>إجراءات صارمة نتبعها لضمان سير المشاريع بنجاح</p>
            <div className="grid-container">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div className="card">
                    <div className="content">
                      <div className="circle"></div>
                      <Image src={feature.imageURL} alt={feature.title} />
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Stack>
        </Grid>
      </div>
    </Box>
  );
};

export default ProceduresSection;
