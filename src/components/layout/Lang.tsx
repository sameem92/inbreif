"use client" // Ensure it's a client component

import React from "react"
import { Box, MenuItem } from "@mui/material"
import Image from "next/image"
import { styled } from "@mui/material/styles"
import { usePopupState, bindHover, bindMenu, bindTrigger } from "material-ui-popup-state/hooks"
import HoverMenu from "material-ui-popup-state/HoverMenu"

const StyledMenu = styled((props: MenuProps) => (
  <HoverMenu
    elevation={0}
    disableAutoFocusItem
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    minWidth: 180,

    background: "linear-gradient(137.34deg, rgba(2, 5, 4, 0.16) 23.98%, rgba(35, 36, 56, 0.16) 65.73%)",
    backdropFilter: "blur(100px)",
    borderRadius: "0px 11px 11px 11px",
    border: "1px solid #22373C",

    marginTop: "0rem",
    color: "white",
    "& .MuiMenu-list": {
      padding: "1.2rem",
      gap: "4px",
      display: "flex",
      flexDirection: "column",
    },
    "& li": {
      "&:hover": {
        background: "#FFFFFF0F",
        color: "#E0E324",
      },
      background: "transparent",
      color: "white",
      // fontFamily: "var(--font-ibm-plex-sans-arabic)",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "4rem",
      fontSize: "1.4rem",
      height: "3rem",
      borderRadius: "4px",
    },
    "& .MuiMenuItem-root": {
      "&:active": {},
    },
  },
}))

import { MenuProps } from "@mui/material/Menu"

const Header = () => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "popupLang",
  })

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { lg: "0.5rem", xl: "1rem" },
          cursor: "pointer",
        }}
        id={`menu`}
        {...bindHover(popupState)}
        {...bindTrigger(popupState)}
      >
        <p className="nav-link">العربية</p>
        <Image src={"/image/chevron-down.png"} alt="arrow down" width={24} height={24} />
      </Box>

      <StyledMenu
        MenuListProps={{
          "aria-labelledby": `menu`,
        }}
        id={`lang-menu`}
        className="border"
        {...bindMenu(popupState)}
      >
        <MenuItem onClick={popupState.close} disableRipple>
          اللغة العربية
        </MenuItem>
        <MenuItem onClick={popupState.close} disableRipple>
          English
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default Header
