import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// import Image from "next/image"
import gif from "../../../../public/expantion.gif"
import Image from "next/image"

const ExpansionSecton = () => {
  return (
    <div className="expansionSecton package">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="62px"
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
            gap: 0,
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <h2>توسع بعالمك التجاري</h2>
              <p>الآن صار بامكانك تبيع منتجاتك بشكل كامل من خلال الواتساب الخاص بك</p>
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center" gap="50px 0px">
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Image src={gif} height={504} width={270} alt="expantion" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{}}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              className="expansionCard1"
            >
              <div className="expansionCard">
                <div className="content">
                  <h3>توسيع نطاق الوصول وزيادة المبيعات</h3>
                  <ul>
                    <li>
                      عرض منتجاتك مباشرة على كتالوج الواتساب بيزنس الخاص بك مما يتيح لعملائك الوصول إليها والتسوق
                      بسهولة.
                    </li>
                    <li>إنشاء حملات إعلانية للكتالوج الخاص بك على منصات التواصل الاجتماعي.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <div className="expansionCard">
                <div className="content">
                  <h3>إدارة مركزية</h3>
                  <ul>
                    <li>تحديث المنتجات و الأسعار تلقائياً من متجرك الى الكتالوجدون الحاجة الى إدخال البيانات.</li>
                    <li>متابعة لحظية من لوحة التحكم المتجر لطلبات العملاء على الواتساب الخاص بك.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ExpansionSecton
