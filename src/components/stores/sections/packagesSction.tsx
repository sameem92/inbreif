import React, { useState } from "react"

// Components
import Grid from "@mui/material/Grid2"
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material"
import Packages from "@/components/tools/package/packages"

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

const plansY = [
  {
    title: "الفضية",
    price: "800",
    features: [
      "عدد غير محدود من الطلبات",
      "تقارير وتحليلات دورية",
      "الربط مع بوابة الدفع",
      "الربط مع بوابة التقسيط",
      "الربط مع بوابة شحن",
      "اصدار وطباعة الفواتير",
      "كوبونات خصم و عروض",
    ],
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الفضية/",
    USD: "250",
    SAR: "800",
    OMR: "90",
    KD: "80",
  },
  {
    title: "الذهبية",
    price: "2000",
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
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الذهبية/",
    USD: "490",
    SAR: "2000",
    OMR: "150",
    KD: "150",
  },
]

const plansM = [
  {
    title: "الفضية",
    price: "70",
    features: [
      "عدد غير محدود من الطلبات",
      "تقارير وتحليلات دورية",
      "الربط مع بوابة الدفع",
      "الربط مع بوابة التقسيط",
      "الربط مع بوابة شحن",
      "اصدار وطباعة الفواتير",
      "كوبونات خصم و عروض",
    ],
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الفضية-شهري/",
    USD: "22",
    SAR: "70",
    OMR: "9",
    KD: "8",
  },
  {
    title: "الذهبية",
    price: "2000",
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
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الذهبية-شهري/",
    USD: "45",
    SAR: "180",
    OMR: "14",
    KD: "15",
  },
]

const PackagesSection = () => {
  const isMobile = useMediaQuery("(max-width:768px)")
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 }
  const [value, setValue] = useState<string | number>(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    setValue(newValue)
  }

  return (
    <div className="packagesSection package" id="packages">
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
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div>
            <div className="sectionHead">
              <h2>خطط الاشتراك</h2>
              <p>انشئ متجرك وأحصل على تجربة رائعة تستطيع ترقية الاشتراك من لوحة تحكم المتجر</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <div>
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
                <Grid container alignItems="flex-end" columnSpacing={2} rowSpacing={6}>
                  <Packages plans={plansY} more className="" buttonText="الاشتراك الآن" />
                </Grid>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Grid container alignItems="flex-end" columnSpacing={2} rowSpacing={6}>
                  <Packages plans={plansM} more className="" buttonText="الاشتراك الآن" />
                </Grid>
              </CustomTabPanel>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackagesSection
