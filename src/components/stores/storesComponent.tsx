"use client"

import style from "./styles/storesComponent.module.scss"

// Components
import HeroSecion from "./sections/heroSecion"
import ServicesSection from "./sections/servicesSection"
import TemplatesSection from "./sections/templatesSection"
import FeaturesSection from "./sections/featuresSection"
import DeliverySection from "./sections/deliverySection"
import PaymentSection from "./sections/paymentSection"
import ExpansionSecton from "./sections/expansionSecton"
import TopServicesSecton from "./sections/topServicesSecton"
import MainFeaturesSection from "./sections/mainFeaturesSection"
import Social from "../tools/social/social"
import PackagesSection from "./sections/packagesSction"

const StoresPage = () => {
  return (
    <div className={style.storesComponent}>
      <Social />

      <HeroSecion />

      <MainFeaturesSection />

      <PackagesSection />

      <ServicesSection />

      <TemplatesSection />

      <FeaturesSection />

      <DeliverySection />

      <PaymentSection />

      <ExpansionSecton />

      <TopServicesSecton />
    </div>
  )
}

export default StoresPage
