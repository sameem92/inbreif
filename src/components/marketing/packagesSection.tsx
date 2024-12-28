import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"

// Icons
import Packages from "../tools/package/packages"

// Types

const plans = [
  {
    title: "هوية بصرية",
    price: "800",
    features: [
      "تصميم شعار احترافي - Logo",
      "إعداد هوية بصرية كاملة ( ألوان + خطوط + رموز )",
      "بطاقة العمل - Business Card",
      "تصميم الختم والورق الرسمي و أظرف المراسلات ",
      "تصميم سندات وفواتير رسمية",
      "تصميم الزي للموظفين والمطبوعات",
      "دليل إرشادي متكامل لإستخدامات الهوية بطريقتها الإحترافية",
    ],
  },
  {
    title: "موشن جرافيك",
    price: "1200",
    features: [
      "كتابة المحتوى - Script Writing",
      "إنشاء القصة - Story Boarding",
      "تصميم العناصر البصرية",
      "تصميم رسومات للشخصيات",
      "تضمين النصوص والشعارات",
      "تعليق صوتي احترافي بلغات ولهجات متنوعة",
      "موسيقى خلفيةو تأثيرات صوتية",
    ],
  },
  {
    title: "مونتاج فيديو",
    price: "500",
    features: [
      "كتابة المحتوى - Script Writing",
      "تجميع المواد من فيديوهات وصور",
      "تحرير وتحسين جودة المواد",
      "إضافة التأثيرات البصرية",
      "إضافة نصوص وعناوين متحركة",
      "توفير الصيغ المناسبة لمختلف المنصات",
      "توفير المقاسات مختلفة للمنصات",
    ],
  },
]

const PackagesSection = () => {
  return (
    <div className="package" id="packages">
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
          <h2 className="main-secandry-title">باقات التصميم والتسويق</h2>
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
            <Grid container gap="80px 0px">
              <Packages plans={plans} className="planCardS2" />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackagesSection
