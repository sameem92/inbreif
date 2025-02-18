import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import InbreifLogo from "../../../../public/image/InbreifLogo.svg";
import DrawerList from "../DrawerList";
import LangSwitcher from "./LangSwitcher";

const DrawerNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log("toggleDrawer", event);
      setDrawerOpen(open);
    };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: "2.4rem",
        }}
      >
        <Link href="/">
          <InbreifLogo />
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <LangSwitcher />
          <IconButton
            // edge="start"
            sx={{
              background: "#E0E324",
              "&:hover": {
                background: "#E0E324",
              },
            }}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default DrawerNav;
