"use client"

import style from "./styles/storesComponent.module.scss"

// Components
import Form from "@/components/tools/form/form"
import Feedback from "@/components/tools/feedback/feedback"
import HeroSecion from "./sections/heroSecion"
import ServicesSection from "./sections/servicesSection"
import TemplatesSection from "./sections/templatesSection"
import FeaturesSection from "./sections/featuresSection"
import DeliverySection from "./sections/deliverySection"
import PaymentSection from "./sections/paymentSection"
import ExpansionSecton from "./sections/expansionSecton"
import TopServicesSecton from "./sections/topServicesSecton"
import MainFeaturesSection from "./sections/mainFeaturesSection"
import Packages from "../tools/package/packages"

const StoresPage = () => {
  return (
    <div className={style.storesComponent}>
      <HeroSecion />

      <MainFeaturesSection />

      <Packages />

      <ServicesSection />

      <TemplatesSection />

      <FeaturesSection />

      <DeliverySection />

      <PaymentSection />

      <ExpansionSecton />

      <TopServicesSecton />

      <Feedback />

      <Form />
    </div>
  )
}

export default StoresPage
