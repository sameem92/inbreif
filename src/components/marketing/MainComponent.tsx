"use client";

import Home from "@/components/marketing/Home";
import Design from "@/components/marketing/Design";
import PackagesSection from "@/components/marketing/packagesSection";
import Social from "@/components/tools/social/social";
import { useEffect } from "react";

const MainComponent = () => {
  useEffect(() => {
    // Check if the URL contains a hash
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove the `#` from the hash
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, []);

  return (
    <>
      <Social />
      <Home />
      <PackagesSection />
      <Design />
    </>
  );
};

export default MainComponent;
