"use client";

import Company1 from "../../../../public/images/store/companies/company1.svg";
import Company2 from "../../../../public/images/store/companies/company2.svg";
import Company3 from "../../../../public/images/store/companies/company3.svg";
import Company4 from "../../../../public/images/store/companies/company4.svg";
import Company5 from "../../../../public/images/store/companies/company5.svg";
import Company6 from "../../../../public/images/store/companies/company6.svg";
import Company7 from "../../../../public/images/store/companies/company7.svg";
import Company8 from "../../../../public/images/store/companies/company8.svg";

const companies = [
  <Company1 key="company1" />,
  <Company2 key="company2" />,
  <Company3 key="company3" />,
  <Company4 key="company4" />,
  <Company5 key="company5" />,
  <Company6 key="company6" />,
  <Company7 key="company7" />,
  <Company8 key="company8" />,
];

import SliderS3 from "@/components/tools/sliders/sliderS3";

const OurCompanies = () => {
  return <SliderS3 images={companies} className="swiper-y" />;
};

export default OurCompanies;
