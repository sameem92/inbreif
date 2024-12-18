import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"

// Images & Icons
import delivery from "../../../../public/images/store/delivery.svg"
import SliderS3 from "@/components/tools/sliders/sliderS3"

const companies = [
  "/images/store/company1.svg",
  "/images/store/company1.svg",
  "/images/store/company1.svg",
  "/images/store/company1.svg",
  "/images/store/company1.svg",
  "/images/store/company1.svg",
]

const DeliverySection = () => {
  return (
    <div className="deliverySection package">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="115px"
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
        <Grid size={{ xs: 12 }} container justifyContent="space-between" alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <div className="delivery_img">
              <Image src={delivery} alt="الشحن والتوصيل" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <div className="info">
              <h2>الشحن والتوصيل</h2>
              <p>وفر لعملائك خيارات متعددة للشراء والشحن سواء كان شحناً سريعاًمحلياً دولياً.</p>

              <p>إدارة فعالة لعمليات الشحن والتوصيل لجميع أنواع المنتجات.</p>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <SliderS3 images={companies} />
    </div>
  )
}

export default DeliverySection
