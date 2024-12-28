import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { Button } from "@mui/material"

// Icons
import checked from "../../../../public/icons/checkedIcon.svg"

const Packages = ({ plans, className, more }) => {
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <>
      {plans.map((plan, i) => (
        <Grid key={plan.title} size={{ xs: 12, lg: 4 }}>
          <div className={`plancard ${className} ${plans.length < 3 && i === 1 ? "gold" : ""}`}>
            <div className="content">
              <h4>{plan.title}</h4>
              <div className="plan_price">
                <span>{plan.price}</span>
                <span> ر.س</span>
              </div>
              {plan.oldPrice && (
                <div className="oldPrice">
                  <span>{plan.oldPrice}</span>
                  <span>ر.س</span>
                </div>
              )}
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
              {more && (
                <a href="http://wa.me/96877276659" target="_blank" rel="noopener noreferrer">
                  المزيد من التفاصيل
                </a>
              )}
            </div>
          </div>
        </Grid>
      ))}

      {plans.length < 3 && (
        <Grid size={{ xs: 12, lg: 4 }}>
          <div className="plancard custom">
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
      )}
    </>
  )
}

export default Packages
