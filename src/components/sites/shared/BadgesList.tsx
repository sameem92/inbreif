import { useTranslations } from "next-intl";
import { FC } from "react";

interface BadgesListProps {
  badges: string[];
}

const BadgesList: FC<BadgesListProps> = ({ badges }) => {
  const t = useTranslations("InformationalReservation");
  return (
    <ul className="badges">
      {badges.map((item, index) => (
        <li key={index} className="badge">
          <p>{t(item)}</p>
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
