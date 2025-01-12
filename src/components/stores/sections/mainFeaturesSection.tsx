import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Images & Icons
import Feat1 from "../../../../public/images/store/feat1.svg"
import Feat2 from "../../../../public/images/store/feat2.svg"
import feat3 from "../../../../public/images/store/feat3.png"
import Icon1 from "../../../../public/icons/icon1.svg"
import Icon2 from "../../../../public/icons/icon2.svg"
import Icon3 from "../../../../public/icons/icon3.svg"
import Icon4 from "../../../../public/icons/icon4.svg"
import Icon5 from "../../../../public/icons/icon5.svg"
import Icon6 from "../../../../public/icons/icon6.svg"
import Icon7 from "../../../../public/icons/icon7.svg"
import Icon8 from "../../../../public/icons/icon8.svg"
import Icon9 from "../../../../public/icons/icon9.svg"
import Icon10 from "../../../../public/icons/icon10.svg"
import Icon11 from "../../../../public/icons/icon11.svg"
import Icon12 from "../../../../public/icons/icon12.svg"
import Icon13 from "../../../../public/icons/icon13.svg"

const MainFeaturesSection = () => {
  return (
    <div className="mainFeaturesSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "100px 20rem",
          "@media (max-width: 1340px)": {
            padding: "100px 20rem",
          },
          "@media (max-width: 1240px)": {
            padding: "15px 20rem 10rem",
          },
          "@media (max-width: 1016px)": {
            padding: "15px 10rem 10rem",
          },
          "@media (max-width: 991px)": {
            padding: "15px 10rem 10rem",
          },
          "@media (max-width: 600px)": {
            padding: "15px 2rem 5rem",
          },
        }}
      >
        <Grid size={{ xs: 12 }} display="flex" flexDirection="column" gap="50px" className="feats">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div className="featureBox">
              <div className="bg">
                <div className="content">
                  <h3>متجرك على ذوقك</h3>
                  <p>تصميم مخصص يحمل هويتك التجارية بطريقة احترافية لتعزيز مبيعاتك</p>
                  <ul>
                    <li>
                      <Icon1 />
                      <span>اختيار من قوالب عديدة</span>
                    </li>
                    <li>
                      <Icon2 />
                      <span>امكانية تخصيص ألوان وخطوط هويتك</span>
                    </li>
                    <li>
                      <Icon3 />
                      <span>انشاء القالب الخاص بك</span>
                    </li>
                  </ul>
                </div>
                <div className="img">
                  <Feat1 />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div className="featureBox">
              <div className="bg">
                <div className="content">
                  <h3>مميزات احترافية لجميع الباقات</h3>
                  <p>خدمات ومزايا تعززّ مشروعك وتوسِع انتشارك</p>
                  <ul>
                    <li>
                      <Icon4 />
                      <span>نطاق مخصص لمتجرك (دومين)</span>
                    </li>
                    <li>
                      <Icon5 />
                      <span>أمان عالي وشهادات حماية</span>
                    </li>
                    <li>
                      <Icon6 />
                      <span>عدد عملاء وطلبات غير محدود</span>
                    </li>
                    <li>
                      <Icon7 />
                      <span>استضافة زوار بعدد غير محدود</span>
                    </li>
                  </ul>
                </div>
                <div className="img">
                  <Feat2 />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <div className="featureBox">
              <div className="bg">
                <div className="content">
                  <h3>خدمات تسويقية مُبتكرة</h3>
                  <p>نحول أفكارك لواقع ملموس مدعوم بكافة الخدمات المتقدمة التي تساعدك في زيادة عدد عملائك</p>
                  <ul>
                    <li>
                      <Icon8 />
                      <span>إستهداف للسلات المتروكة</span>
                    </li>
                    <li>
                      <Icon9 />
                      <span>خصم الشحن المجاني</span>
                    </li>
                    <li>
                      <Icon10 />
                      <span>إضافة العروض والخصومات</span>
                    </li>
                    <li>
                      <Icon11 />
                      <span>إدارة الحملات التسويقية لمتجرك</span>
                    </li>
                    <li>
                      <Icon12 />
                      <span>خصومات لعملاء المتجر</span>
                    </li>
                    <li>
                      <Icon13 />
                      <span>رسائل نصية تسويقية عبر الإيميل والـ SMS</span>
                    </li>
                  </ul>
                </div>
                <div className="img">
                  <Image src={feat3} alt="feat3" />
                </div>
              </div>
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainFeaturesSection
