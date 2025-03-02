import CurrencyBox from "./CurrencyBox";
import Checked from "../../../../public/icons/checkedIcon.svg";
import { useTranslations } from "next-intl";
import MotionWrapper from "@/components/tools/MotionWrapper";
import ToSiteBtn from "./ToSiteBtn";

const PlanCard = ({ plan, index }) => {
  const t = useTranslations("DesignMotion.DesignVideoPackages");

  return (
    <MotionWrapper
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className={`plancard planCardS2 ${index === 1 ? "gold" : ""}`}>
        <div className="content">
          <h4>{t(plan.title)}</h4>

          <CurrencyBox plan={plan} />

          <ul>
            {plan?.features?.map((feature) => (
              <li key={feature}>
                <Checked /> <span>{t(feature)}</span>
              </li>
            ))}
          </ul>
          <ToSiteBtn index={index} />
        </div>
      </div>
    </MotionWrapper>
  );
};

export default PlanCard;
