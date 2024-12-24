import React, { useState } from "react"
import Image from "next/image"

import style from "./styles/packges.module.scss"

// Components
import Grid from "@mui/material/Grid2"
import { Box, Button, Tab, Tabs } from "@mui/material"

// Icons
import checked from "../../../../public/icons/checkedIcon.svg"

// Types
interface TabPanelProps {
  index: number | string
  value: number | string
  children: React.ReactNode
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, children, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      sx={{
        width: "100%",
        paddingTop: "3rem",
      }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  )
}

const plans = [
  {
    title: "الفضية",
    price: "300",
    oldPrice: "550",
    features: [
      "عدد غير محدود من الطلبات",
      "تقارير وتحليلات دورية",
      "الربط مع بوابة الدفع",
      "الربط مع بوابة التقسيط",
      "الربط مع بوابة شحن",
      "اصدار وطباعة الفواتير",
      "كوبونات خصم و عروض",
    ],
  },
  {
    title: "الذهبية",
    price: "500",
    oldPrice: "750",
    features: [
      "جميع مميزات الباقة الفضية",
      "تحكم في تصميم المتجر",
      "لغات متعددة",
      "التسويق بالعمولة",
      "متابعة وتحديث أداء المتجر",
      "طرق شحن متنوعة",
      "دعم 3 فروع",
      "3 مستخدمين لإدارة المتجر",
      "دعم فني واتساب 24 ساعة",
    ],
  },
]

const Packages = () => {
  const [value, setValue] = useState<string | number>(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    setValue(newValue)
  }

  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <div className={`${style.packagesSection} package`}>
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="80px"
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
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div className="sectionHead">
            <h2>خطط الإشتراك</h2>
            <p>انشئ متجرك وأحصل على تجربة رائعة تستطيع ترقية الإشتراك من لوحة تحكم المتجر</p>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              width: "100%",
              "& .MuiTabs-flexContainer": {
                gap: "3.2rem",
              },
            }}
          >
            <Tabs
              className="tabs"
              value={value}
              onChange={handleChange}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tab label="سنوي" {...a11yProps(0)} />
              <Tab label="شهري" {...a11yProps(1)} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
              <Grid container alignItems="flex-end" gap="80px 0px">
                {plans.map((plan, i) => (
                  <Grid key={plan.title} size={{ xs: 12, lg: 4 }}>
                    <div className={`planCard ${i === 1 ? "gold" : ""}`}>
                      <div className="content">
                        <h4>{plan.title}</h4>
                        <div className="plan_price">
                          <span>{plan.price}</span>
                          <span> ر.س</span>
                        </div>
                        <div className="oldPrice">
                          <span>{plan.oldPrice}</span>
                          <span>ر.س</span>
                        </div>
                        <ul>
                          {plan.features.map((feature) => (
                            <li key={feature}>
                              <Image src={checked} alt="checked" /> <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          sx={{
                            background: i === 1 ? "#E0E324" : "transparent",
                            borderColor: i === 1 ? "transparent" : "#e1e42a",
                          }}
                        >
                          الإشتراك الآن
                        </Button>
                        <a href="http://wa.me/96877276659" target="_blank" rel="noopener noreferrer">
                          المزيد من التفاصيل
                        </a>
                      </div>
                    </div>
                  </Grid>
                ))}

                <Grid size={{ xs: 12, lg: 4 }}>
                  <div className="planCard custom">
                    <div className="content">
                      <h4>مخصصة</h4>

                      <p>يمكنك تخصيص باقتك وفقا لاحتياجاتك الخاصةمما يتيح لك اختيار الخدمات التي تناسب نشاطك</p>

                      <Button
                        onClick={goToWhatsApp}
                        sx={{
                          background: "transparent",
                        }}
                      >
                        تواصل معنا
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Grid container alignItems="flex-end">
                {plans.map((plan, i) => (
                  <Grid key={plan.title} size={{ xs: 12, md: 4 }}>
                    <div className={`planCard ${i === 1 ? "gold" : ""}`}>
                      <div className="content">
                        <h4>{plan.title}</h4>
                        <div className="plan_price">
                          <span>{plan.price}</span>
                          <span> ر.س</span>
                        </div>
                        <div className="oldPrice">
                          <span>{plan.oldPrice}</span>
                          <span>ر.س</span>
                        </div>
                        <ul>
                          {plan.features.map((feature) => (
                            <li key={feature}>
                              <Image src={checked} alt="checked" /> <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          sx={{
                            background: i === 1 ? "#E0E324" : "transparent",
                            borderColor: i === 1 ? "transparent" : "#e1e42a",
                          }}
                        >
                          الإشتراك الآن
                        </Button>
                        <a href="http://wa.me/96877276659" target="_blank" rel="noopener noreferrer">
                          المزيد من التفاصيل
                        </a>
                      </div>
                    </div>
                  </Grid>
                ))}

                <Grid size={{ xs: 12, md: 4 }}>
                  <div className="planCard custom">
                    <div className="content">
                      <h4>مخصصة</h4>

                      <p>يمكنك تخصيص باقتك وفقا لاحتياجاتك الخاصةمما يتيح لك اختيار الخدمات التي تناسب نشاطك</p>

                      <Button
                        sx={{
                          background: "transparent",
                        }}
                        onClick={goToWhatsApp}
                      >
                        تواصل معنا
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Packages
