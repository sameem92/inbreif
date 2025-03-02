import MotionWrapper from "@/components/tools/MotionWrapper";
import { useTranslations } from "next-intl";

export const FeatureBox = ({ titleKey, descKey, listItems, image }) => {
  const t = useTranslations("ECommerce.MainFeaturesSection");

  return (
    <MotionWrapper
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween", stiffness: 400, damping: 10 }}
    >
      <div className="featureBox">
        <div className="bg">
          <div className="content">
            <h3>{t(titleKey)}</h3>
            <p>{t(descKey)}</p>
            <ul>
              {listItems.map(({ icon, key }) => (
                <li key={key}>
                  {icon}
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="img">{image}</div>
        </div>
      </div>
    </MotionWrapper>
  );
};
