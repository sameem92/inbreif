import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Images & Icons
import service1 from "../../../../public/images/store/services/service1.png"
import service2 from "../../../../public/images/store/services/service2.png"
import service3 from "../../../../public/images/store/services/service3.png"

const TopServicesSecton = () => {
  return (
    <div className="topServicesSecton">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ margin: "0 auto" }}
      >
        <Grid
          container
          spacing={{ xs: 4, sm: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "100px 15rem ",
            "@media (max-width: 1400px)": {
              padding: "80px 10rem 50px",
            },
            "@media (max-width: 1240px)": {
              padding: "50px 4rem",
            },
            "@media (max-width: 992px)": {
              padding: "50px 4rem 0px",
            },
            "@media (max-width: 767px)": {
              padding: "50px 4rem",
            },
            "@media (max-width: 600px)": {
              padding: "80px 4rem 0px",
            },
            "@media (max-width: 480px)": {
              padding: "5rem 4rem 0px",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <div>
              <div className="sectionHead">
                <h2>شات بوت ذكي لخدمة عملائك</h2>
              </div>
              <ul>
                <li>ذكاء اصطناعي متقدم.</li>
                <li>يرد على جميع استفسارات عملائك بشكل فوري.</li>
                <li>ردود فورية على استفسارات العملاء على مدار الساعة.</li>
                <li>توصية ذكية بناءً على اهتمامات العميل وسجل طلباته.</li>
                <li>إتمام الطلبات بسهولة دون الحاجة لتدخل بشري.</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="img">
              <Image src={service1} alt="service1" />
            </div>
          </Grid>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ margin: "0 auto" }}
      >
        <Grid
          container
          spacing={{ xs: 4, sm: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "0px 15rem 100px 0rem",
            "@media (max-width: 1340px)": {
              padding: "0px 10rem 50px 0rem",
            },
            "@media (max-width: 1240px)": {
              padding: "0rem 4rem 50px 0rem",
            },
            "@media (max-width: 992px)": {
              padding: "0rem 4rem 50px 0rem",
            },
            "@media (max-width: 480px)": {
              padding: "0px 2rem 48px 0rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 2, sm: 1 }}>
            <div className="img start">
              <Image src={service2} alt="service2" />
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            order={{ xs: 1, sm: 2 }}
            sx={{
              "@media (max-width: 992px)": {
                padding: "0 2rem",
              },
            }}
          >
            <div>
              <div className="sectionHead">
                <h2>حول متجرك لتطبيق موبايل احترافي</h2>
                <p>
                  قدم أفضل تجربة للعملاء في التجارة الإلكترونية عن طريق تطبيق يساعد العملاء في التنقل السهلوالسريع
                  والدفع بنقرة واحدة.
                </p>
              </div>
              <ul>
                <li>تزيد التطبيقات من ولاء العملاء.</li>
                <li>تعزيز مبيعاتك بشكل مميز.</li>
                <li>متوفر على جوجل بلاي و أبل ستور.</li>
                <li> خدمة الدفع من خلال أبل باي.</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ margin: "0 auto" }}
      >
        <Grid
          container
          spacing={{ xs: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "0px 15rem 100px",
            "@media (max-width: 1340px)": {
              padding: "0px 10rem 50px",
            },
            "@media (max-width: 1240px)": {
              padding: "0px 4rem 50px",
            },
            "@media (max-width: 992px)": {
              padding: "0px 4rem 50px",
            },
            "@media (max-width: 767px)": {
              padding: "0px 4rem 80px",
            },
            "@media (max-width: 600px)": {
              padding: "0px 4rem 80px",
            },
            "@media (max-width: 480px)": {
              padding: "0px 2rem 0rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <div>
              <div className="sectionHead">
                <h2>خدمات المحاسبة و إدارة المخزون</h2>
                <p>
                  يمكنك عبر واجهة إحترافية وسهلة الاستخدام، إضافة عدد لا محدود من المنتجات و الربط مع الأنظمة المحاسبية
                </p>
              </div>
              <ul>
                <li>نظام نقاط للبيع.</li>
                <li>إدارة الأفرع.</li>
                <li>ربط مع أنظمة محاسبية.</li>
                <li>إصدار وطباعة الفواتير.</li>
                <li>اضافة ضريبة القيمة المضافة.</li>
                <li>إدارة المخزون.</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="img">
              <Image src={service3} alt="service3" />
            </div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default TopServicesSecton
