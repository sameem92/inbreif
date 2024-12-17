"use client"

import style from "./styles/storesComponent.module.scss"

// Components
import Form from "@/components/tools/form/form"
import Feedback from "@/components/tools/feedback/feedback"
import HeroSecion from "./sections/heroSecion"
import PlansSection from "./sections/plansSection"

const StoresPage = () => {
  return (
    <div className={style.storesComponent}>
      <HeroSecion />

      <PlansSection />

      <Feedback />

      <Form />
    </div>
  )
}

export default StoresPage
