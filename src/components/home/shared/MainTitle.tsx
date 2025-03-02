"use client";

import { useTranslations } from "next-intl";
import { ReactTyped } from "react-typed";

const MainTitle = () => {
  const t = useTranslations("Home");

  return (
    <h1 className="main-title">
      <ReactTyped
        backSpeed={60}
        strings={[`${t("title1")}`, `${t("title2")}`]}
        typeSpeed={60}
        loop={true}
      />
    </h1>
  );
};

export default MainTitle;
