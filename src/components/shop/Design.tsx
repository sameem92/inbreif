/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"

import React from "react"
import { Container, Box, Card, CardContent, Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
const icon1 = "/image/l1.png"
const icon2 = "/image/l2.png"
const icon3 = "/image/l3.png"
const icon4 = "/image/l4.png"
const icon5 = "/image/l5.png"
const icon6 = "/image/l6.png"
const icon7 = "/image/l7.png"
const icon8 = "/image/l8.png"
const icon9 = "/image/l9.png"
const icon10 = "/image/l11.png"
const icon11 = "/image/l12.png"
const icon12 = "/image/l13.png"

// Data
const sections = [
  {
    title: "إدارة حسابات التواصل الاجتماعي",
    subtitle: "اجعل علامتك التجارية تتألق عبر منصات التواصل الاجتماعي",
    items: [
      {
        icon: icon1,
        title: "إنشاء محتوى جذاب",
        list: ["تصميم محتوى بصري ونصي يتناسب مع هويتكم.", "إنتاج فيديوهات قصيرة وملفتة لزيادة التفاعل."],
      },
      {
        icon: icon2,
        title: "استراتيجيات النشر",
        list: [
          "جدولة المنشورات في الأوقات المثلى لتعزيز الظهور.",
          "استخدام أدوات التحليل لفهم أنماط التفاعل وتفضيلات الجمهور.",
        ],
      },
      {
        icon: icon3,
        title: "تحليل الأداء",
        list: ["تقارير دورية عن الأداء تشمل التفاعل والنمو.", "تحليل سلوك الجمهور وتقديم توصيات."],
      },
    ],
  },
  {
    title: "الحملات الإعلانية المدفوعة",
    subtitle: "نساعدك في تصميم وتنفيذ حملات إعلانية فعالة",
    items: [
      {
        icon: icon4,
        title: "تصميم الحملات الإبداعية",
        list: ["تطوير استراتيجية إعلانية مبتكرة تتماشى مع أهدافكم.", "تصميم إعلانات جذابة بصريًا."],
      },
      {
        icon: icon5,
        title: " استهداف دقيق",
        list: [
          "تحديد الفئات المستهدفة بناءً على اهتماماتهم وسلوكهم.",
          "استخدام تقنيات مثل إعادة الاستهداف لزيادة فعالية الحملات",
        ],
      },
      {
        icon: icon6,
        title: "تحليل الأداء والعائد",
        list: ["قياس فعالية الحملات باستخدام مؤشرات الأداء الرئيسية.", "تقديم تقارير و توصيات للتحسين."],
      },
    ],
  },
  {
    title: " استراتيجيات التسويق",
    subtitle: "نقدم لك خطة تسويقية مخصصة تناسب احتياجاتك",
    items: [
      {
        icon: icon7,
        title: "تحليل السوق",
        list: [" دراسة الاتجاهات والسلوكيات لفهم السوق .", " تحليل المنافسين لتحديد الفرص والتحديات."],
      },
      {
        icon: icon8,
        title: "تحديد الأهداف",
        list: [" وضع أهداف دقيقة وقابلة للقياس تلبي احتياجاتكم.", " تطوير استراتيجيات لتحقيق الأهداف."],
      },
      {
        icon: icon9,
        title: "تنفيذ الاستراتيجيات",
        list: [" دعمك في تنفيذ الخطط عبر القنوات التسويقية.", "متابعة الأداء وتعديل الاستراتيجيات حسب الحاجة."],
      },
    ],
  },
  {
    title: "استراتيجيات المحتوى",
    subtitle: "نساعدك في تطوير محتوى يجذب ويؤثر في جمهورك",
    items: [
      {
        icon: icon10,
        title: "التخطيط للمحتوى",
        list: ["إنشاء تقويم زمني للمحتوى شامل.", "تحديد أنواع المحتوى الأكثر ملاءمة لجمهوركم (مقالات، تصاميم، فيديو)."],
      },
      {
        icon: icon11,
        title: " كتابة المحتوى",
        list: ["تحسين المحتوى لمحركات البحث (SEO) لزيادة الظهور.", "كتابة نصوص تسويقية متخصصة."],
      },
      {
        icon: icon12,
        title: " إدارة المحتوى",
        list: ["متابعة الأداء وضبط الاستراتيجيات بناءً على النتائج..", " تقديم توصيات لتحسين التفاعل وزيادة الوصول.."],
      },
    ],
  },
]

// Component to render a section
const Section = ({ section }) => (
  <>
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "90%", xl: "100%" },
        gap: { xs: "3rem", md: "5rem", lg: "7rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "2.9rem",
        }}
      >
        <motion.h1
          className="main-shop-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {section.title}
        </motion.h1>
        <Typography
          sx={{
            textAlign: "center !important",
          }}
          className="paragrph-shop"
        >
          {section.subtitle}
        </Typography>
      </Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "4rem", md: "5rem", lg: "6rem" },
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={3} justifyContent="center">
              {section.items.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} alignSelf="stretch">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "2.8rem",
                        display: "flex",
                        flexDirection: "column",
                        padding: { xs: "1.2rem", xl: "1.6rem 3rem" },
                        gap: "2.4rem",
                        "&:hover": { border: "1px solid #E0E324" },
                        "@media(max-width:900px": {
                          minHeight: "330px",
                        },
                        "@media(max-width:480px": {
                          minHeight: "auto",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.6rem",
                        }}
                      >
                        <Image src={item.icon} alt={item.title} width={50} height={50} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: "2rem", md: "1.6rem", lg: "2rem" },
                            fontWeight: 600,
                            lineHeight: "2.2rem",
                            color: "#ffffff",
                            textAlign: "left",
                            margin: "1.2rem 0",
                            opacity: "0.9",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <ul className="shop-list">
                          {item.list.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </Box>
  </>
)

export default function Design() {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "6rem 0", md: "10rem 0", xl: "15rem 0" },
          gap: { xs: "8rem", md: "10rem" },
        }}
        maxWidth="lg"
      >
        {sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </Container>
    </motion.div>
  )
}
