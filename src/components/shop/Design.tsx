/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
const icon1 = "/image/l1.png";
const icon2 = "/image/l2.png";
const icon3 = "/image/l3.png";
const icon4 = "/image/l4.png";
const icon5 = "/image/l5.png";
const icon6 = "/image/l6.png";
const icon7 = "/image/l7.png";
const icon8 = "/image/l8.png";
const icon9 = "/image/l9.png";
const icon10 = "/image/l11.png";
const icon11 = "/image/l12.png";
const icon12 = "/image/l13.png";

// Data
const sections = [
  {
    title: "SocialMediaSection.title",
    subtitle: "SocialMediaSection.description",
    items: [
      {
        icon: icon1,
        title: "SocialMediaSection.item1.title",
        list: [
          "SocialMediaSection.item1.feature1",
          "SocialMediaSection.item1.feature2",
        ],
      },
      {
        icon: icon2,
        title: "SocialMediaSection.item2.title",
        list: [
          "SocialMediaSection.item2.feature1",
          "SocialMediaSection.item2.feature2",
        ],
      },
      {
        icon: icon3,
        title: "SocialMediaSection.item3.title",
        list: [
          "SocialMediaSection.item3.feature1",
          "SocialMediaSection.item3.feature2",
        ],
      },
    ],
  },
  {
    title: "AdvertisingCampaigns.title",
    subtitle: "AdvertisingCampaigns.description",
    items: [
      {
        icon: icon4,
        title: "AdvertisingCampaigns.item1.title",
        list: [
          "AdvertisingCampaigns.item1.feature1",
          "AdvertisingCampaigns.item1.feature2",
        ],
      },
      {
        icon: icon5,
        title: "AdvertisingCampaigns.item2.title",
        list: [
          "AdvertisingCampaigns.item2.feature1",
          "AdvertisingCampaigns.item2.feature2",
        ],
      },
      {
        icon: icon6,
        title: "AdvertisingCampaigns.item3.title",
        list: [
          "AdvertisingCampaigns.item3.feature1",
          "AdvertisingCampaigns.item3.feature2",
        ],
      },
    ],
  },
  {
    title: "MarketingStrategies.title",
    subtitle: "MarketingStrategies.description",
    items: [
      {
        icon: icon7,
        title: "MarketingStrategies.item1.title",
        list: [
          "MarketingStrategies.item1.feature1",
          "MarketingStrategies.item1.feature2",
        ],
      },
      {
        icon: icon8,
        title: "MarketingStrategies.item2.title",
        list: [
          "MarketingStrategies.item2.feature1",
          "MarketingStrategies.item2.feature2",
        ],
      },
      {
        icon: icon9,
        title: "MarketingStrategies.item3.title",
        list: [
          "MarketingStrategies.item3.feature1",
          "MarketingStrategies.item3.feature2",
        ],
      },
    ],
  },
  {
    title: "ContentStrategies.title",
    subtitle: "ContentStrategies.description",
    items: [
      {
        icon: icon10,
        title: "ContentStrategies.item1.title",
        list: [
          "ContentStrategies.item1.feature1",
          "ContentStrategies.item1.feature2",
        ],
      },
      {
        icon: icon11,
        title: "ContentStrategies.item2.title",
        list: [
          "ContentStrategies.item2.feature1",
          "ContentStrategies.item2.feature2",
        ],
      },
      {
        icon: icon12,
        title: "ContentStrategies.item3.title",
        list: [
          "ContentStrategies.item3.feature1",
          "ContentStrategies.item3.feature2",
        ],
      },
    ],
  },
];

// Component to render a section
const Section = ({ section }) => {
  const t = useTranslations("MarketingCampaigns");

  return (
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
            {t(section.title)}
          </motion.h1>
          <Typography
            sx={{
              textAlign: "center !important",
            }}
            className="paragrph-shop"
          >
            {t(section.subtitle)}
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
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    alignSelf="stretch"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "tween",
                        stiffness: 200,
                        damping: 10,
                      }}
                      style={{ height: "100%" }}
                      className="hover"
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          padding: { xs: "1.2rem", xl: "1.6rem 3rem" },
                          gap: "2.4rem",
                          "@media(max-width:900px": {
                            minHeight: "330px",
                          },
                          "@media(max-width:480px": {
                            minHeight: "auto",
                          },
                        }}
                        className="content"
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.6rem",
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: {
                                xs: "2rem",
                                md: "1.6rem",
                                lg: "2rem",
                              },
                              fontWeight: 600,
                              lineHeight: "2.2rem",
                              color: "#ffffff",
                              margin: "1.2rem 0",
                              opacity: "0.9",
                            }}
                          >
                            {t(item.title)}
                          </Typography>
                          <ul className="shop-list">
                            {item.list.map((li, i) => (
                              <li key={i}>{t(li)}</li>
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
  );
};

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
  );
}
