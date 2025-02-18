"use client";

import { AppBar, Box, Stack, Toolbar, useMediaQuery } from "@mui/material";
import Link from "next/link";
import InbreifLogo from "../../../public/image/InbreifLogo.svg";
import ContactUsButton from "./components/ContactUsButton";
import CurrencySwitcher from "./components/CurrencySwitcher";
import DrawerNav from "./components/DrawerNav";
import LangSwitcher from "./components/LangSwitcher";
import MainNavigation from "./components/MainNavigation";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 1128px)");

  return (
    <AppBar
      sx={{
        background: "#0C171524",
        backdropFilter: "blur(24px)",
        padding: "1.7rem 6rem",
        boxShadow: "none",
        "@media (max-width: 1340px)": {
          padding: "1.7rem 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "1.7rem 0",
        },
        "@media (max-width: 992px)": {
          padding: "1.7rem 2rem",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {isMobile ? (
            <DrawerNav />
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row-reverse"
              width="100%"
            >
              <Stack
                direction="row"
                alignItems="center"
                flexDirection="row-reverse"
                gap="1rem"
              >
                <LangSwitcher />
                <ContactUsButton />
                <CurrencySwitcher />
              </Stack>
              <MainNavigation />
              <Link href="/">
                <InbreifLogo />
              </Link>
            </Stack>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
