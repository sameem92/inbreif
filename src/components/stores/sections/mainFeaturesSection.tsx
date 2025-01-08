import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Images & Icons
import feat1 from "../../../../public/images/store/feat1.svg"
import feat2 from "../../../../public/images/store/feat2.svg"
import feat3 from "../../../../public/images/store/feat3.png"
import icon1 from "../../../../public/icons/icon1.svg"
import icon2 from "../../../../public/icons/icon2.svg"
import icon3 from "../../../../public/icons/icon3.svg"
import icon4 from "../../../../public/icons/icon4.svg"
import icon5 from "../../../../public/icons/icon5.svg"
import icon6 from "../../../../public/icons/icon6.svg"
import icon7 from "../../../../public/icons/icon7.svg"
import icon8 from "../../../../public/icons/icon8.svg"
import icon9 from "../../../../public/icons/icon9.svg"
import icon10 from "../../../../public/icons/icon10.svg"
import icon11 from "../../../../public/icons/icon11.svg"
import icon12 from "../../../../public/icons/icon12.svg"
import icon13 from "../../../../public/icons/icon13.svg"

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
                      <Image src={icon1} alt="icon1" />
                      <span>اختيار من قوالب عديدة</span>
                    </li>
                    <li>
                      <Image src={icon2} alt="icon1" />
                      <span>امكانية تخصيص ألوان وخطوط هويتك</span>
                    </li>
                    <li>
                      <Image src={icon3} alt="icon1" />
                      <span>انشاء القالب الخاص بك</span>
                    </li>
                  </ul>
                </div>
                <div className="img">
                  <Image src={feat1} alt="feat1" />
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
                      <Image src={icon4} alt="icon4" />
                      <span>نطاق مخصص لمتجرك (دومين)</span>
                    </li>
                    <li>
                      <Image src={icon5} alt="icon5" />
                      <span>أمان عالي وشهادات حماية</span>
                    </li>
                    <li>
                      <Image src={icon6} alt="icon6" />
                      <span>عدد عملاء وطلبات غير محدود</span>
                    </li>
                    <li>
                      <Image src={icon7} alt="icon7" />
                      <span>استضافة زوار بعدد غير محدود</span>
                    </li>
                  </ul>
                </div>
                <div className="img">
                  <Image src={feat2} alt="feat2" />
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
                      <Image src={icon8} alt="icon8" />
                      <span>إستهداف للسلات المتروكة</span>
                    </li>
                    <li>
                      <Image src={icon9} alt="icon9" />
                      <span>خصم الشحن المجاني</span>
                    </li>
                    <li>
                      <Image src={icon10} alt="icon10" />
                      <span>إضافة العروض والخصومات</span>
                    </li>
                    <li>
                      <Image src={icon11} alt="icon11" />
                      <span>إدارة الحملات التسويقية لمتجرك</span>
                    </li>
                    <li>
                      <Image src={icon12} alt="icon12" />
                      <span>خصومات لعملاء المتجر</span>
                    </li>
                    <li>
                      <Image src={icon13} alt="icon13" />
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
