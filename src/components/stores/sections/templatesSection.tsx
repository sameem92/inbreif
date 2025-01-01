import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import SliderS2 from "@/components/tools/sliders/sliderS2"
import { motion } from "framer-motion"
import { useMediaQuery } from "@mui/material"

// Images & Icons
import product1 from "../../../../public/images/store/products/product1.svg"
import product2 from "../../../../public/images/store/products/product2.svg"
import product3 from "../../../../public/images/store/products/product3.svg"
import product4 from "../../../../public/images/store/products/product4.svg"
import product5 from "../../../../public/images/store/products/product5.svg"
import product6 from "../../../../public/images/store/products/product6.svg"
import product7 from "../../../../public/images/store/products/product7.svg"
import product8 from "../../../../public/images/store/products/product8.svg"
import product9 from "../../../../public/images/store/products/product9.svg"
import product10 from "../../../../public/images/store/products/product10.svg"

const products = [
  { title: "عطور", image: product1 },
  { title: "اجهزة الكترونية", image: product2 },
  { title: "عبايات و أزياء", image: product3 },
  { title: "اثاث ومفروشات", image: product4 },
  { title: "العاب أطفال", image: product5 },
  { title: "مطاعم ومقاهي", image: product6 },
  { title: "منتجات رقمية", image: product7 },
  { title: "إكسسوارات", image: product8 },
  { title: "هدايا وديكور", image: product9 },
  { title: "أدوات منزلية", image: product10 },
]

const TemplatesSection = () => {
  const isMobile = useMediaQuery("(max-width:768px)")
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 }

  return (
    <div className="templatesSection package">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={animation}
        transition={{ duration: 0.6 }}
        style={{ margin: "0 auto" }}
      >
        <Grid
          container
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
          <Grid size={{ xs: 12 }} marginBottom="82px">
            <div className="sectionHead">
              <h2>هنا متجرك مهما كان مجالك !</h2>
              <p>متواجدون لتلبية كل احتياجاتك، خدمات متنوعة لجميع المجالات</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12 }} marginBottom="28px">
            <SliderS2 products={products} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <a href="http://wa.me/96877276659" target="_blank" rel="noopener noreferrer">
              اطلب معاينة القوالب المميزة
            </a>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default TemplatesSection
