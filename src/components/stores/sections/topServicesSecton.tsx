import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"

// Images & Icons
import service1 from "../../../../public/images/store/services/service1.svg"
import service2 from "../../../../public/images/store/services/service2.svg"
import service3 from "../../../../public/images/store/services/service3.svg"

const TopServicesSecton = () => {
  return (
    <div className="topServicesSecton">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "0px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "0px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "0px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "0px 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
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
        <Grid size={{ xs: 12, lg: 6 }}>
          <div className="img">
            <Image src={service1} alt="service1" />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "0px 10rem 100px 0rem",
          "@media (max-width: 1340px)": {
            padding: "0px 2rem 100px 0rem",
          },
          "@media (max-width: 1240px)": {
            padding: "0rem 1rem 12rem 0rem",
          },
          "@media (max-width: 992px)": {
            padding: "0rem 2rem 6rem 0rem",
          },
        }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
          <div className="img start">
            <Image src={service2} alt="service2" />
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6 }}
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
                قدم أفضل تجربة للعملاء في التجارة الإلكترونية عن طريق تطبيق يساعد العملاء في التنقل السهلوالسريع والدفع
                بنقرة واحدة.
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

      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "0px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "0px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "0px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "0px 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
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
        <Grid size={{ xs: 12, lg: 6 }}>
          <div className="img">
            <Image src={service3} alt="service3" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default TopServicesSecton
