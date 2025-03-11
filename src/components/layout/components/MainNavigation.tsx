"use client";

import { NavList } from "@/constants/page";
import { Box, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import NavigationMenuDemo from "./NavigationMenuDemo";
import { UrlObject } from "url";

const MainNavigation = () => {
  const t = useTranslations("Shared");
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const locale = useLocale();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      {locale == "ar" ? (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          width="100%"
          gap="18px"
        >
          {NavList.map((item) => (
            <Link
              prefetch={true}
              href={
                item.path as
                  | "/"
                  | ({ pathname: "/" } & Omit<UrlObject, "pathname">)
              }
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              key={item.path}
            >
              {t(item.title)}
            </Link>
          ))}
        </Stack>
      ) : (
        <>
          <NavigationMenuDemo />
        </>
      )}
    </Box>
  );
};

export default MainNavigation;
