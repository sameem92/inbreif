import React, { useEffect, useState } from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { Button } from "@mui/material"
import { motion } from "framer-motion"

// Icons
import checked from "../../../../public/icons/checkedIcon.svg"

const currencyMap = {
  default: { code: "USD", symbol: "دولار" },
  KSA: { code: "SAR", symbol: "ر.س" },
  KW: { code: "KD", symbol: "د.ك" },
  OM: { code: "OMR", symbol: "ر.ع" },
}

const Packages = ({ plans, className, more, buttonText }) => {
  const [currency, setCurrency] = useState(currencyMap.default)

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Example with `ip-api`
        const response = await fetch("https://ip-api.com/json/")
        const data = await response.json()

        switch (data.countryCode) {
          case "SA": // Saudi Arabia
            setCurrency(currencyMap.KSA)
            break
          case "KW": // Kuwait
            setCurrency(currencyMap.KW)
            break
          case "OM": // Oman
            setCurrency(currencyMap.OM)
            break
          default:
            setCurrency(currencyMap.default) // Default to USD
        }
      } catch (error) {
        console.error("Error fetching user location:", error)
        setCurrency(currencyMap.default)
      }
    }

    fetchUserLocation()
  }, [])

  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <>
      {plans?.map((plan, i) => (
        <Grid key={plan.title} size={{ xs: 12, lg: 4 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div className={`plancard ${className} ${className !== "planCardS2" && i === 1 ? "gold" : ""}`}>
              <div className="content">
                <h4>{plan.title}</h4>
                <div className="plan_price">
                  <span>{plan.price}</span>
                  <span> ر.س</span>
                </div>
                {plan.label && <div className="label">{plan.label}</div>}
                {plan.oldPrice && (
                  <div className="oldPrice">
                    <span>{plan[currency.code]}</span>
                    <span>{currency.symbol}</span>
                  </div>
                )}
                <ul>
                  {plan?.features?.map((feature) => (
                    <li key={feature}>
                      <Image src={checked} alt="checked" /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  sx={{
                    background: className !== "planCardS2" && i === 1 ? "#E0E324" : "transparent",
                    borderColor: className !== "planCardS2" && i === 1 ? "transparent" : "#e1e42a",
                  }}
                >
                  {buttonText}
                </Button>
                {more && <a href="#features">المزيد من التفاصيل</a>}
              </div>
            </div>
          </motion.div>
        </Grid>
      ))}

      {plans.length < 3 && (
        <Grid size={{ xs: 12, lg: 4 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
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
          </motion.div>
        </Grid>
      )}
    </>
  )
}

export default Packages
