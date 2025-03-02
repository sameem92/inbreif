import { DesignServices } from "@/constants/page";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import ArrowDown from "./ArrowDown";

export default function DesignMarketingMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const t = useTranslations("Shared");
  const pathname = usePathname();
  const locale = useLocale();

  const isActive = (path: string) => pathname === path;

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMouseEnter}
        sx={{
          color: "#fff",
          backgroundColor: "transparent",
          fontSize: "1.6rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "1.6rem",
          padding: 0,
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#e0e324",
          },

          "@media (max-width: 1340px)": {
            fontSize: "1.4rem",
          },
        }}
      >
        {t("Design_Marketing")}
        <ArrowDown width={24} height={32} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: locale === "ar" ? "right" : "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: locale === "ar" ? "right" : "left",
        }}
        MenuListProps={{
          onMouseLeave: handleMouseLeave, // Close when mouse leaves menu
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#001219",
            mt: 2,
            padding: "16px 8px",
            borderRadius: "16px",
          },
          "& .MuiList-root": {
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {DesignServices.map((item, index) => (
          <MenuItem onClick={handleMouseLeave} key={index}>
            <Link
              prefetch={true}
              href={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {t(item.title)}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
