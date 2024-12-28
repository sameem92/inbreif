import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Icons
import scrollIcon from "../../../../public/icons/scrollIcon.svg"
import service1 from "../../../../public/icons/service1.svg"
import service2 from "../../../../public/icons/service2.svg"
import service3 from "../../../../public/icons/service3.svg"
import service4 from "../../../../public/icons/service4.svg"
import service5 from "../../../../public/icons/service5.svg"
import service6 from "../../../../public/icons/service6.svg"
import service7 from "../../../../public/icons/service7.svg"
import service8 from "../../../../public/icons/service8.svg"
import service9 from "../../../../public/icons/service9.svg"
import service10 from "../../../../public/icons/service10.svg"
import service11 from "../../../../public/icons/service11.svg"
import service12 from "../../../../public/icons/service12.svg"

const services = [
  {
    icon: service1,
    title: "ربط مع واتساب بيزنس",
    description:
      "احصل على ميزة الربط لتمكين عملاء جدد من اجراء عملية شراء متكاملة لمنتجاتك من الكتالوج الخاص بك على الواتساب بيزنس.",
  },
  {
    icon: service2,
    title: "الرسائل النصية (SMS)",
    description: "كن قريباً من عملائك بإرسال رسائل تسويقية لهم ولمتابعة وصول الطلب لهم.",
  },
  {
    icon: service3,
    title: "الشات بوت",
    description: "المحادثة الفورية والرد الآلي التي تزيد من التفاعل وسرعة الرد على استفسارات العملاء.",
  },
  {
    icon: service4,
    title: "نظام نقاط البيع (POS)",
    description: "يقدم نظام نقاط البيع الخاص بنا الحل الأمثل لإدارة عمليات البيع من الأفرع الخاصة بمتجرك.",
  },
  {
    icon: service5,
    title: "نظام إدارة السائقين",
    description: "احصل على خدمة إدارة وتنظيم السائقين الخاصين بك بشكل دقيق وعملي لتسهيل عملية التوصيل والمتابعة.",
  },
  {
    icon: service6,
    title: "إنشاء تطبيق للمتجر",
    description: "تطبيق خاص لمتجرك يوفر تجربة تسوق سهلة ومريحة لعملائك وزيادة مبيعاتك.",
  },
  {
    icon: service7,
    title: "استشاري إدارة المتجر",
    description: "لضمان نجاح العلامة التجارية وزيادة المبيعات، تعيين مسؤول عن الإدارة الكاملة للوحة التحكم الخاصة بك.",
  },
  {
    icon: service8,
    title: "إضافة المحتوى",
    description: "احصل على خدمة إضافة المنتجات والصفحات على متجرك مع دعم لغات متعددة للمحتوى الخاص بك.",
  },
  {
    icon: service9,
    title: "تحسين محركات البحث",
    description:
      "قم برفع متجرك في أعلى نتائج البحث في جوجل وذلك عبر خدمة seo و كتابة المحتوى والمقالات المناسبة لمتجرك.",
  },
  {
    icon: service10,
    title: "استشاري تسويق المتجر",
    description: "تعيين مسؤول تسويقي لإنشاء حملات إعلانية وادارة حسابات التواصل الإجتماعي الخاصة بمتجرك.",
  },
  {
    icon: service11,
    title: "نظام حجز الطاولات",
    description: "يقدم لك نظام حجز الطاولات حلاً مثالياً لتسهيل إدارة حجز الزبائن.",
  },
  {
    icon: service12,
    title: "متجر متعدد التجار",
    description:
      "تتيح لك ميزة المتجر متعدد التجار إمكانية السماح لكل تاجر إنشاء ملفه الشخصي و رفع منتجاته على متجرك للاستفادة من مبيعاته.",
  },
]

const ServicesSection = () => {
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
          <div className="sectionHead">
            <a href="#features">
              <Image src={scrollIcon} alt="scroll" />
            </a>
            <h2>استمتع بحرية اختيار الإضافات التي تجعل باقتك متكاملة</h2>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }} container spacing={{ xs: 2, md: 4 }}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <div className="service">
                  <div className="content">
                    <div className="service_price">
                      <span>300 </span>
                      <span>ر.س</span>
                    </div>
                    <div className="img">
                      <Image src={service.icon} alt={service.title} />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default ServicesSection
