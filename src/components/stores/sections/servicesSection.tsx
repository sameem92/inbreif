/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

import React, { useEffect, useState } from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"

// Icons
import scrollIcon from "../../../../public/icons/scrollIcon.svg"
import service1 from "../../../../public/icons/service1.png"
import service2 from "../../../../public/icons/service2.png"
import service3 from "../../../../public/icons/service3.png"
import service4 from "../../../../public/icons/service4.png"
import service5 from "../../../../public/icons/service5.png"
import service6 from "../../../../public/icons/service6.png"
import service7 from "../../../../public/icons/service7.png"
import service8 from "../../../../public/icons/service8.png"
import service9 from "../../../../public/icons/service9.png"
import service10 from "../../../../public/icons/service10.png"
import service11 from "../../../../public/icons/service11.png"
import service12 from "../../../../public/icons/service12.png"

const services = [
  {
    icon: service1,
    title: "ربط مع واتساب بيزنس",
    description:
      "احصل على ميزة الربط لتمكين عملاء جدد من اجراء عملية شراء متكاملة لمنتجاتك من الكتالوج الخاص بك على الواتساب بيزنس.",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service2,
    title: "الرسائل النصية (SMS)",
    description: "كن قريباً من عملائك بإرسال رسائل تسويقية لهم ولمتابعة وصول الطلب لهم.",
    USD: "10",
    SAR: "35",
    OMR: "4",
    KD: "4",
  },
  {
    icon: service3,
    title: "الشات بوت",
    description: "المحادثة الفورية والرد الآلي التي تزيد من التفاعل وسرعة الرد على استفسارات العملاء.",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service4,
    title: "نظام نقاط البيع (POS)",
    description: "يقدم نظام نقاط البيع الخاص بنا الحل الأمثل لإدارة عمليات البيع من الأفرع الخاصة بمتجرك.",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service5,
    title: "نظام إدارة السائقين",
    description: "احصل على خدمة إدارة وتنظيم السائقين الخاصين بك بشكل دقيق وعملي لتسهيل عملية التوصيل والمتابعة.",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service6,
    title: "إنشاء تطبيق للمتجر",
    description: "تطبيق خاص لمتجرك يوفر تجربة تسوق سهلة ومريحة لعملائك وزيادة مبيعاتك.",
    USD: "120",
    SAR: "425",
    OMR: "35",
    KD: "35",
  },
  {
    icon: service7,
    title: "استشاري إدارة المتجر",
    description: "لضمان نجاح العلامة التجارية وزيادة المبيعات، تعيين مسؤول عن الإدارة الكاملة للوحة التحكم الخاصة بك.",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service8,
    title: "إضافة المحتوى",
    description: "احصل على خدمة إضافة المنتجات والصفحات على متجرك مع دعم لغات متعددة للمحتوى الخاص بك.",
    USD: "85",
    SAR: "300",
    OMR: "25",
    KD: "25",
  },
  {
    icon: service9,
    title: "تحسين محركات البحث",
    description:
      "قم برفع متجرك في أعلى نتائج البحث في جوجل وذلك عبر خدمة seo و كتابة المحتوى والمقالات المناسبة لمتجرك.",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service10,
    title: "استشاري تسويق المتجر",
    description: "تعيين مسؤول تسويقي لإنشاء حملات إعلانية وادارة حسابات التواصل الإجتماعي الخاصة بمتجرك.",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service11,
    title: "نظام حجز الطاولات",
    description: "يقدم لك نظام حجز الطاولات حلاً مثالياً لتسهيل إدارة حجز الزبائن.",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service12,
    title: "متجر متعدد التجار",
    description:
      "تتيح لك ميزة المتجر متعدد التجار إمكانية السماح لكل تاجر إنشاء ملفه الشخصي و رفع منتجاته على متجرك للاستفادة من مبيعاته.",
    USD: "50",
    SAR: "200",
    OMR: "18",
    KD: "16",
  },
]

const currencyMap = {
  default: { code: "USD", symbol: "دولار" },
  KSA: { code: "SAR", symbol: "ر.س" },
  KW: { code: "KD", symbol: "د.ك" },
  OM: { code: "OMR", symbol: "ر.ع" },
}

const ServicesSection = () => {
  const [currency, setCurrency] = useState(null)
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Example with `ip-api`
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        switch (data.country_code) {
          case "SA": // Saudi Arabia
            setCurrency(currencyMap.KSA)
            break
          case "KW": // Kuwait
            setCurrency(currencyMap.KW)
            break
          case "OM": // Oman
            setCurrency(currencyMap.OM)
            break
          default:
            setCurrency(currencyMap.default) // Default to USD
        }
      } catch (error) {
        console.error("Error fetching user location:", error)
        setCurrency(currencyMap.default)
      }
    }

    fetchUserLocation()
  }, [])

  return (
    <div className="servicesSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="82px"
        sx={{
          padding: "100px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "100px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <a href="#features">
                <Image src={scrollIcon} alt="scroll" />
              </a>
              <h2>استمتع بحرية اختيار الإضافات التي تجعل باقتك متكاملة</h2>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }} container spacing={{ xs: 2, md: 4 }}>
          {services.map((service, i) => (
            <Grid key={service.title} size={{ xs: 6, sm: 4, md: 3 }}>
              <div>
                <div className="service">
                  <div className="content">
                    {currency && (
                      <div className="service_price">
                        <span>{service[currency.code]}</span>
                        <span>{currency.symbol}</span>
                        {i !== 7 && <span>/شهر</span>}
                      </div>
                    )}
                    <div className="img">
                      <Image height={100} width={100} src={service.icon} alt={service.title} />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default ServicesSection
