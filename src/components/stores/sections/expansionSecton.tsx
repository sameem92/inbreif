import React from "react"

// Components
import Grid from "@mui/material/Grid2"
// import Image from "next/image"
import { motion } from "framer-motion"

// Images & Icons
// import expansion from "../../../../public/images/store/expansion.png"

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ margin: "0 auto" }}
          >
            <div className="sectionHead">
              <h2>توسع بعالمك التجاري</h2>
              <p>الأن صار بامكانك تبيع منتجاتك بشكل كامل من خلال الواتساب الخاص بك</p>
            </div>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12 }} container alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <video autoPlay muted loop>
              <source src="/videos/video.mp4" type="video/mp4" />
            </video>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
