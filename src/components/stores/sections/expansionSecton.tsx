import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import Image from "next/image"

// Images & Icons
import expansion from "../../../../public/images/store/expansion.svg"

const ExpansionSecton = () => {
  return (
    <div className="expansionSecton package">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="115px"
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
            <h2>توسع بعالمك التجاري</h2>
            <p>الأن صار بامكانك تبيع منتجاتك بشكل كامل من خلال الواتساب الخاص بك</p>
          </div>
        </Grid>

        <Grid size={{ xs: 12 }} container>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="img">
              <Image src={expansion} alt="expansion" />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="expansionCard">
              <div className="content">
                <h3>توسيع نطاق الوصول وزيادة المبيعات</h3>
                <ul>
                  <li>
                    عرض منتجاتك مباشرة على كتالوج الواتساب بيزنس الخاص بك مما يتيح لعملائك الوصول إليها والتسوق بسهولة.
                  </li>
                  <li>إنشاء حملات إعلانية للكتالوج الخاص بك على منصات التواصل الاجتماعي.</li>
                </ul>
              </div>
            </div>

            <div className="expansionCard">
              <div className="content">
                <h3>إدارة مركزية</h3>
                <ul>
                  <li>تحديث المنتجات و الأسعار تلقائياً من متجرك الى الكتالوجدون الحاجة الى إدخال البيانات.</li>
                  <li>متابعة لحظية من لوحة التحكم المتجر لطلبات العملاء على الواتساب الخاص بك.</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ExpansionSecton
