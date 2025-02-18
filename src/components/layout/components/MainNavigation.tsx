import { NavList } from "@/constants/page";
import { Box, Stack } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProgrammingDevelopmentMenu from "./ProgrammingDevelopmentMenu";
import DesignMarketingMenu from "./DesignMarketingMenu";

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
        gap: "2.6rem",
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
          gap="16px"
        >
          {NavList.map((item) => (
            <Link
              href={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              key={item.path}
            >
              {t(item.title)}
            </Link>
          ))}
        </Stack>
      ) : (
        <>
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            {t("Home")}
          </Link>
          <Link
            href="/about-us"
            className={`nav-link ${isActive("/about-us") ? "active" : ""}`}
          >
            {t("About")}
          </Link>
          <ProgrammingDevelopmentMenu />
          <DesignMarketingMenu />
        </>
      )}
    </Box>
  );
};

export default MainNavigation;
