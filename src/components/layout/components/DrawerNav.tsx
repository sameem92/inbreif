"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import DrawerList from "./DrawerList";
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
          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 1128px)": {
            display: "flex",
          },

          // gap: "2.4rem",
        }}
      >
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
