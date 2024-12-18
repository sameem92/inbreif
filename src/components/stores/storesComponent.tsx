"use client"

import style from "./styles/storesComponent.module.scss"

// Components
import Form from "@/components/tools/form/form"
import Feedback from "@/components/tools/feedback/feedback"
import HeroSecion from "./sections/heroSecion"
import PlansSection from "./sections/plansSection"
import ServicesSection from "./sections/servicesSection"
import TemplatesSection from "./sections/templatesSection"
import FeaturesSection from "./sections/featuresSection"
import DeliverySection from "./sections/deliverySection"

const StoresPage = () => {
  return (
    <div className={style.storesComponent}>
      <HeroSecion />

      <PlansSection />

      <ServicesSection />

      <TemplatesSection />

      <FeaturesSection />

      <DeliverySection />

      <Feedback />

      <Form />
    </div>
  )
}

export default StoresPage
