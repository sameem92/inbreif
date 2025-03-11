// "use client";

import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import InbreifLogo from "../../../public/image/InbreifLogo.svg";
import ContactUsButton from "./components/ContactUsButton";
import CurrencySwitcher from "./components/CurrencySwitcher";
import DrawerNav from "./components/DrawerNav";
import LangSwitcher from "./components/LangSwitcher";
import MainNavigation from "./components/MainNavigation";

const Header = () => {
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
          <Link href="/" prefetch={true}>
            <InbreifLogo />
          </Link>
          <DrawerNav />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row-reverse"
            width="100%"
            sx={{
              display: "flex",
              "@media (max-width: 1185px)": {
                display: "none",
              },
            }}
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
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
