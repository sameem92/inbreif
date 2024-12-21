import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import SliderS2 from "@/components/tools/sliders/sliderS2"

// Images & Icons
import product1 from "../../../../public/images/store/product1.svg"
import product2 from "../../../../public/images/store/product2.svg"
import product3 from "../../../../public/images/store/product3.svg"
import product4 from "../../../../public/images/store/product4.svg"
import product5 from "../../../../public/images/store/product5.svg"

const products = [
  { title: "عطور", image: product1 },
  { title: "اجهزة الكترونية", image: product2 },
  { title: "عبايات و أزياء", image: product3 },
  { title: "اثاث ومفروشات", image: product4 },
  { title: "العاب أطفال", image: product5 },
  { title: "عطور", image: product1 },
  { title: "اجهزة الكترونية", image: product2 },
  { title: "عبايات و أزياء", image: product3 },
  { title: "اثاث ومفروشات", image: product4 },
  { title: "العاب أطفال", image: product5 },
  { title: "عطور", image: product1 },
  { title: "اجهزة الكترونية", image: product2 },
  { title: "عبايات و أزياء", image: product3 },
  { title: "اثاث ومفروشات", image: product4 },
  { title: "العاب أطفال", image: product5 },
  { title: "عطور", image: product1 },
  { title: "اجهزة الكترونية", image: product2 },
  { title: "عبايات و أزياء", image: product3 },
  { title: "اثاث ومفروشات", image: product4 },
  { title: "العاب أطفال", image: product5 },
]

const TemplatesSection = () => {
  return (
    <div className="templatesSection package">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="82px"
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
            <h2>هنا متجرك مهما كان مجالك !</h2>
            <p>متواجدون لتلبية كل احتياجاتك، خدمات متنوعة لجميع المجالات</p>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }} container gap="56px" justifyContent="center">
          <Grid size={{ xs: 12 }}>
            <SliderS2 products={products} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default TemplatesSection
